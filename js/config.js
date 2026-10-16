// Frontend configuration.
//
// SUPABASE_URL and SUPABASE_ANON_KEY come from Supabase -> Project Settings -> API.
// The anon ("publishable") key is MEANT to be public: Row Level Security and the
// database functions protect the data. NEVER put the service_role key here.
export const SUPABASE_URL = 'https://YOUR-PROJECT-REF.supabase.co'
export const SUPABASE_ANON_KEY = 'YOUR-ANON-KEY'

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
