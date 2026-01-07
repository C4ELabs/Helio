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

    const responseText = await response.text()
    let responseData
    try {
      responseData = JSON.parse(responseText)
    } catch {
      responseData = { message: responseText }
    }

    if (!response.ok) {
      console.error('n8n webhook error:', response.status, responseData)
      
      // Check for duplicate email - check status code, message, or any duplicate indicators
      const isDuplicate = 
        response.status === 409 || 
        response.status === 400 ||
        responseData.message?.toLowerCase().includes('duplicate') ||
        responseData.message?.toLowerCase().includes('already') ||
        responseData.message?.toLowerCase().includes('exists') ||
        responseData.error?.toLowerCase().includes('duplicate') ||
        responseData.error?.toLowerCase().includes('already') ||
        responseData.error?.toLowerCase().includes('exists')
      
      if (isDuplicate) {
        return res.status(409).json({ error: 'This email is already signed up!' })
      }
      
      return res.status(response.status).json({ error: responseData.message || responseData.error || 'Failed to process request' })
    }

    // Check response body for duplicate indicators even on 200 status
    const isDuplicateInResponse = 
      responseData.message?.toLowerCase().includes('duplicate') ||
      responseData.message?.toLowerCase().includes('already') ||
      responseData.message?.toLowerCase().includes('exists') ||
      responseData.error?.toLowerCase().includes('duplicate') ||
      responseData.error?.toLowerCase().includes('already') ||
      responseData.error?.toLowerCase().includes('exists')
    
    if (isDuplicateInResponse) {
      return res.status(409).json({ error: 'This email is already signed up!' })
    }

    return res.status(200).json(responseData || { success: true })
  } catch (error) {
    console.error('Error in waitlist API:', error)
    return res.status(500).json({ error: 'Internal server error' })
  }
}

