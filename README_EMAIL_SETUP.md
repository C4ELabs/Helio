# Email Setup for Waitlist

This guide will help you set up email sending for the waitlist using Supabase Edge Functions and Resend.

## Prerequisites

1. A Supabase project (you already have this)
2. A Resend account (free tier available at https://resend.com)
3. Supabase CLI installed (`npm install -g supabase`)

## Step 1: Set Up Resend

1. Sign up at https://resend.com
2. Verify your domain (or use their test domain for development)
3. Get your API key from the Resend dashboard
4. Note your "from" email address

## Step 2: Deploy the Edge Function

1. Install Supabase CLI if you haven't:
   ```bash
   npm install -g supabase
   ```

2. Login to Supabase:
   ```bash
   supabase login
   ```

3. Link your project:
   ```bash
   supabase link --project-ref your-project-ref
   ```
   (Find your project ref in Supabase dashboard URL)

4. Set environment variables for the function:
   ```bash
   supabase secrets set RESEND_API_KEY=your_resend_api_key
   supabase secrets set FROM_EMAIL=noreply@yourdomain.com
   ```

5. Deploy the function:
   ```bash
   supabase functions deploy send-waitlist-email
   ```

## Step 3: Test the Function

After deployment, test it by calling it from your Waitlist component. The function will automatically be called when users join the waitlist.

## Alternative: Using Database Triggers

If you prefer to send emails automatically via database triggers instead of calling the function from the frontend:

1. Create a database function in Supabase SQL Editor:
   ```sql
   CREATE OR REPLACE FUNCTION send_waitlist_email()
   RETURNS TRIGGER AS $$
   BEGIN
     -- Call the edge function
     PERFORM
       net.http_post(
         url := current_setting('app.supabase_url') || '/functions/v1/send-waitlist-email',
         headers := jsonb_build_object(
           'Content-Type', 'application/json',
           'Authorization', 'Bearer ' || current_setting('app.supabase_anon_key')
         ),
         body := jsonb_build_object('email', NEW.email)
       );
     RETURN NEW;
   END;
   $$ LANGUAGE plpgsql;
   ```

2. Create a trigger:
   ```sql
   CREATE TRIGGER on_waitlist_insert
   AFTER INSERT ON waitlist
   FOR EACH ROW
   EXECUTE FUNCTION send_waitlist_email();
   ```

## Email Service Alternatives

If you don't want to use Resend, you can modify the Edge Function to use:
- SendGrid
- Mailgun
- AWS SES
- Postmark
- Or any other email API

Just update the `index.ts` file in `supabase/functions/send-waitlist-email/` with the appropriate API calls.

