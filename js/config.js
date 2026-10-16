// Frontend configuration.
//
// SUPABASE_URL and SUPABASE_ANON_KEY come from Supabase -> Project Settings -> API.
// The anon ("publishable") key is MEANT to be public: Row Level Security and the
// database functions protect the data. NEVER put the service_role key here.
export const SUPABASE_URL = 'https://qfnjombanedrxrsqqqpr.supabase.co'
export const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFmbmpvbWJhbmVkcnhyc3FxcXByIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTIxNTcxNDEsImV4cCI6MjEwNzczMzE0MX0.32gqFvnt79mhHv5bkhGIU1eK5riznOzHp_tAwU-hnuo'

// Site name shown in the header, footer and page titles.
export const SITE = {
  name: 'Street for Christ',
}

// Designer credit shown in the footer. It is a WhatsApp link that opens a chat
// with the number below and the message pre-filled.
export const CREDIT = {
  designer: 'Gideon Kiplangat',
  company: 'Tekipra Systems',
  whatsapp: '0702499324',
  message: 'Hello Tekipra Systems, I saw your work on the Street for Christ website and I would like to talk about a project.',
}
