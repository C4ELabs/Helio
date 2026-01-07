export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { email, timestamp } = req.body

    if (!email) {
      return res.status(400).json({ error: 'Email is required' })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' })
    }

    // Get n8n webhook URL from environment variable
    const n8nWebhookUrl = process.env.N8N_WEBHOOK_URL

    if (!n8nWebhookUrl) {
      console.error('N8N_WEBHOOK_URL is not set')
      return res.status(500).json({ error: 'Service not configured' })
    }

    // Forward request to n8n webhook
    const response = await fetch(n8nWebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email.toLowerCase().trim(),
        timestamp: timestamp || new Date().toISOString(),
      }),
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      console.error('n8n webhook error:', response.status, errorData)
      
      // Check for duplicate email
      if (response.status === 409 || errorData.message?.includes('duplicate') || errorData.message?.includes('already')) {
        return res.status(409).json({ error: 'This email is already on the waitlist.' })
      }
      
      return res.status(response.status).json({ error: errorData.message || 'Failed to process request' })
    }

    const data = await response.json().catch(() => ({ success: true }))
    return res.status(200).json(data)
  } catch (error) {
    console.error('Error in waitlist API:', error)
    return res.status(500).json({ error: 'Internal server error' })
  }
}

