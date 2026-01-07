import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

let supabase = null

// Check if we're in development mode
const isDev = import.meta.env.DEV

if (supabaseUrl && supabaseAnonKey) {
  try {
    supabase = createClient(supabaseUrl, supabaseAnonKey)
    if (isDev) {
      console.log('✓ Supabase client initialized')
    }
  } catch (error) {
    console.error('Failed to initialize Supabase:', error)
  }
} else {
  if (isDev) {
    console.error('❌ Supabase environment variables missing!')
    console.error('VITE_SUPABASE_URL:', supabaseUrl ? '✓ Set' : '✗ Missing')
    console.error('VITE_SUPABASE_ANON_KEY:', supabaseAnonKey ? '✓ Set' : '✗ Missing')
    console.error('Make sure:')
    console.error('1. .env file exists in project root (same folder as package.json)')
    console.error('2. Variables are named exactly: VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY')
    console.error('3. No quotes around values in .env file')
    console.error('4. Dev server was restarted after creating/editing .env file')
  }
}

export { supabase }

