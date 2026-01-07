import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

let supabase = null

// Debug logging (remove in production)
console.log('Supabase URL:', supabaseUrl ? 'Set' : 'Missing')
console.log('Supabase Key:', supabaseAnonKey ? 'Set' : 'Missing')

if (supabaseUrl && supabaseAnonKey) {
  try {
    supabase = createClient(supabaseUrl, supabaseAnonKey)
    console.log('Supabase client initialized successfully')
  } catch (error) {
    console.error('Failed to initialize Supabase:', error)
  }
} else {
  console.warn('Missing Supabase environment variables. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your .env file')
  console.warn('Make sure to restart your dev server after creating/updating the .env file')
}

export { supabase }

