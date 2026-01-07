// Supabase Edge Function to send welcome email to waitlist users
// Deploy this function in your Supabase project

import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')
const FROM_EMAIL = Deno.env.get('FROM_EMAIL') || 'noreply@yourdomain.com'

interface EmailRequest {
  email: string
  name?: string
}

serve(async (req) => {
  // Handle CORS
  if (req.method === 'OPTIONS') {
    return new Response('ok', {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
      },
    })
  }

  try {
    const { email, name }: EmailRequest = await req.json()

    if (!email) {
      return new Response(
        JSON.stringify({ error: 'Email is required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

    if (!RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not set')
      return new Response(
        JSON.stringify({ error: 'Email service not configured' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      )
    }

    // Send email using Resend API
    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: `Helio <${FROM_EMAIL}>`,
        to: [email],
        subject: "You're in. No perfect habits required.",
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
            </head>
            <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.7; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
              <div style="background: #ffffff; padding: 40px 30px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                <p style="font-size: 16px; margin-bottom: 24px; color: #333;">
                  Hi there,
                </p>
                <p style="font-size: 16px; margin-bottom: 24px; color: #333;">
                  You're officially on the Helio waitlist ✨
                </p>
                <p style="font-size: 16px; margin-bottom: 24px; color: #333;">
                  Which means two things are true at the same time:
                </p>
                <p style="font-size: 16px; margin-bottom: 12px; color: #333;">
                  1/ You care about your health
                </p>
                <p style="font-size: 16px; margin-bottom: 24px; color: #333;">
                  2/ Life still gets in the way sometimes
                </p>
                <p style="font-size: 16px; margin-bottom: 24px; color: #333;">
                  That's exactly who Helio is for.
                </p>
                <p style="font-size: 16px; margin-bottom: 24px; color: #333;">
                  We're building Helio because most "consistency tools" secretly expect ideal days. Perfect mornings, no travel, no missed doses, no mood swings.
                </p>
                <p style="font-size: 16px; margin-bottom: 24px; color: #333;">
                  Real life doesn't work like that. And honestly? It shouldn't have to.
                </p>
                <p style="font-size: 16px; margin-bottom: 24px; color: #333;">
                  Helio is being shaped around:<br>
                  missed days that don't turn into guilt spirals + routines that flex when your schedule does + staying on track without needing superhero willpower
                </p>
                <p style="font-size: 16px; margin-bottom: 24px; color: #333;">
                  You'll be among the first to try it when we open things up. Until then, we'll only drop into your inbox when there's something actually worth sharing.
                </p>
                <p style="font-size: 16px; margin-bottom: 24px; color: #333;">
                  No noise. No pressure. No streak shaming.
                </p>
                <p style="font-size: 16px; margin-bottom: 8px; color: #333;">
                  Thanks for trusting us early.<br>
                  We're really glad you're here.
                </p>
                <p style="font-size: 16px; margin-top: 32px; margin-bottom: 4px; color: #333;">
                  - Team Helio
                </p>
                <p style="font-size: 14px; margin-top: 0; color: #4870b8; font-weight: 500;">
                  Consistency, but for real life
                </p>
              </div>
            </body>
          </html>
        `,
        text: `Hi there,

You're officially on the Helio waitlist ✨

Which means two things are true at the same time:

1/ You care about your health
2/ Life still gets in the way sometimes

That's exactly who Helio is for.

We're building Helio because most "consistency tools" secretly expect ideal days. Perfect mornings, no travel, no missed doses, no mood swings.

Real life doesn't work like that. And honestly? It shouldn't have to.

Helio is being shaped around:
missed days that don't turn into guilt spirals + routines that flex when your schedule does + staying on track without needing superhero willpower

You'll be among the first to try it when we open things up. Until then, we'll only drop into your inbox when there's something actually worth sharing.

No noise. No pressure. No streak shaming.

Thanks for trusting us early.
We're really glad you're here.

- Team Helio
Consistency, but for real life`,
      }),
    })

    if (!emailResponse.ok) {
      const errorData = await emailResponse.text()
      console.error('Resend API error:', errorData)
      return new Response(
        JSON.stringify({ error: 'Failed to send email' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      )
    }

    const emailData = await emailResponse.json()

    return new Response(
      JSON.stringify({ success: true, messageId: emailData.id }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }
    )
  } catch (error) {
    console.error('Error:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
})

