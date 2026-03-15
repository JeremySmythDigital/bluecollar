import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key'

// Graceful fallback - create client only if env vars are set
export const supabase = process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

export const isSupabaseConfigured = !!supabase

// Database types
export interface Job {
  id: string
  user_id: string
  title: string
  trade: 'plumbing' | 'electrical' | 'mechanical' | 'hvac' | 'general'
  description: string
  status: 'in_progress' | 'completed' | 'on_hold'
  notes: string
  created_at: string
  completed_at: string | null
}

export interface TradeGuide {
  id: string
  trade: 'plumbing' | 'electrical' | 'mechanical' | 'hvac'
  title: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  steps: Step[]
  tools_required: string[]
  materials: string[]
  estimated_time: string
}

export interface Step {
  order: number
  title: string
  description: string
  tips: string[]
  warnings: string[]
}

export interface TroubleshootingSession {
  id: string
  user_id: string
  trade: string
  problem: string
  symptoms: string[]
  diagnosis: string
  solution: string
  created_at: string
}