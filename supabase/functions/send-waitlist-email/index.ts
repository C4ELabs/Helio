// Setup type definitions for built-in Supabase Runtime APIs
import "jsr:@supabase/functions-js/edge-runtime.d.ts";

// @ts-ignore - Deno is available at runtime in Supabase Edge Functions
const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY")!;

// CORS headers
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// @ts-ignore - Deno is available at runtime in Supabase Edge Functions
Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    // Check if RESEND_API_KEY is set
    if (!RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not set');
      return new Response(
        JSON.stringify({ error: "Email service not configured" }),
        { 
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }

    const { email } = await req.json();

    if (!email) {
      return new Response(
        JSON.stringify({ error: "Email is required" }),
        { 
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: "Invalid email format" }),
        { 
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }

    const emailPayload = {
      from: "Helio <hello@heliocoach.com>",
      to: email,
      subject: "You're in. No perfect habits required.",
        html: `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>You’re in. No perfect habits required.</title>
  </head>
  <body style="margin:0; padding:0; background-color:#f8f6f4;">
    <table width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td align="center" style="padding:40px 20px;">
          <table
            width="100%"
            cellpadding="0"
            cellspacing="0"
            style="max-width:600px; background-color:#ffffff; border-radius:8px; padding:32px; font-family:Arial, Helvetica, sans-serif; color:#333333;"
          >
            <tr>
              <td style="font-size:16px; line-height:1.6;">
                <p>Hi there,</p>

                <p>You’re officially on the Helio waitlist ✨</p>

                <p>Which means two things are true at the same time:</p>

                <p>
                  1/ You care about your health<br />
                  2/ Life still gets in the way sometimes
                </p>

                <p>That’s exactly who Helio is for.</p>

                <p>
                  We’re building Helio because most “consistency tools” secretly
                  expect ideal days. Perfect mornings, no travel, no missed
                  doses, no mood swings.
                </p>

                <p>
                  Real life doesn’t work like that. And honestly? It shouldn’t
                  have to.
                </p>

                <p>
                  Helio is being shaped around:<br />
                  missed days that don’t turn into guilt spirals + routines that
                  flex when your schedule does + staying on track without needing
                  superhero willpower
                </p>

                <p>
                  You’ll be among the first to try it when we open things up.
                  Until then, we’ll only drop into your inbox when there’s
                  something actually worth sharing.
                </p>

                <p>No noise. No pressure. No streak shaming.</p>

                <p>
                  Thanks for trusting us early.<br />
                  We’re really glad you’re here.
                </p>

                <p style="margin-top:24px;">
                  — Team Helio<br />
                  <span style="font-size:14px; color:#666666;">
                    Consistency, but for real life
                  </span>
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
        `,
    };

    console.log('Sending email to:', email);
    console.log('Using API key:', RESEND_API_KEY ? 'Set' : 'Missing');

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify(emailPayload),
    });

    const data = await res.json();
    console.log('Resend API response status:', res.status);
    console.log('Resend API response:', JSON.stringify(data));

    if (!res.ok) {
      console.error('Resend API error:', data);
      return new Response(
        JSON.stringify({ error: data, status: res.status }),
        { 
          status: res.status,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }

    return new Response(
      JSON.stringify({ success: true }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );
  } catch (err) {
    console.error('Edge function error:', err);
    return new Response(
      JSON.stringify({ error: err.message || "Invalid request", details: err.toString() }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );
  }
});
