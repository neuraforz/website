-- ============================================
-- NEURAFORZ AI CHATBOT - SUPABASE SETUP
-- ============================================
-- Run this SQL in your Supabase SQL Editor
-- Dashboard > SQL Editor > New Query > Paste & Run
-- ============================================

-- Enable the pgvector extension for vector similarity search
create extension if not exists vector;

-- ============================================
-- NEURAFORZ FAQs TABLE
-- ============================================
-- Stores FAQ questions, answers, and embeddings for RAG
create table if not exists neuraforz_faqs (
  id bigserial primary key,
  question text not null,
  answer text not null,
  category text,
  keywords text[], -- Array of keywords for better search
  embedding vector(1536), -- OpenAI text-embedding-3-small uses 1536 dimensions
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create an index for faster vector similarity search
-- This dramatically speeds up FAQ matching
create index if not exists neuraforz_faqs_embedding_idx
on neuraforz_faqs
using ivfflat (embedding vector_cosine_ops)
with (lists = 100);

-- Create index on category for filtering
create index if not exists neuraforz_faqs_category_idx
on neuraforz_faqs(category);

-- ============================================
-- VECTOR SIMILARITY SEARCH FUNCTION
-- ============================================
-- Finds the most relevant FAQs based on semantic similarity
create or replace function match_faqs (
  query_embedding vector(1536),
  match_threshold float default 0.7,
  match_count int default 3
)
returns table (
  id bigint,
  question text,
  answer text,
  category text,
  keywords text[],
  similarity float
)
language sql stable
as $$
  select
    neuraforz_faqs.id,
    neuraforz_faqs.question,
    neuraforz_faqs.answer,
    neuraforz_faqs.category,
    neuraforz_faqs.keywords,
    1 - (neuraforz_faqs.embedding <=> query_embedding) as similarity
  from neuraforz_faqs
  where 1 - (neuraforz_faqs.embedding <=> query_embedding) > match_threshold
  order by neuraforz_faqs.embedding <=> query_embedding
  limit match_count;
$$;

-- ============================================
-- CHAT HISTORY TABLES (Optional)
-- ============================================
-- Track chat sessions and messages for analytics
create table if not exists neuraforz_chat_sessions (
  id uuid primary key default gen_random_uuid(),
  user_id text, -- Optional: track user if you have authentication
  metadata jsonb, -- Store additional session data (browser, location, etc.)
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

create table if not exists neuraforz_chat_messages (
  id bigserial primary key,
  session_id uuid references neuraforz_chat_sessions(id) on delete cascade,
  role text not null check (role in ('user', 'assistant', 'system')),
  content text not null,
  metadata jsonb, -- Store AI provider, model, response time, etc.
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create indexes for faster queries
create index if not exists neuraforz_chat_sessions_created_at_idx
on neuraforz_chat_sessions(created_at desc);

create index if not exists neuraforz_chat_messages_session_id_idx
on neuraforz_chat_messages(session_id);

-- ============================================
-- ROW LEVEL SECURITY (RLS)
-- ============================================
-- Enable RLS for security in production
alter table neuraforz_faqs enable row level security;
alter table neuraforz_chat_sessions enable row level security;
alter table neuraforz_chat_messages enable row level security;

-- Allow public read access to FAQs
create policy "Allow public read access to Neuraforz FAQs" 
on neuraforz_faqs
for select using (true);

-- Allow service role to insert/update FAQs (for seeding)
create policy "Allow service role to manage FAQs" 
on neuraforz_faqs
for all using (auth.jwt() ->> 'role' = 'service_role');

-- Allow public to create chat sessions
create policy "Allow public to create Neuraforz chat sessions" 
on neuraforz_chat_sessions
for insert with check (true);

-- Allow public to read their own sessions
create policy "Allow public to read Neuraforz chat sessions" 
on neuraforz_chat_sessions
for select using (true);

-- Allow public to create chat messages
create policy "Allow public to create Neuraforz chat messages" 
on neuraforz_chat_messages
for insert with check (true);

-- Allow public to read chat messages
create policy "Allow public to read Neuraforz chat messages" 
on neuraforz_chat_messages
for select using (true);

-- ============================================
-- HELPER FUNCTIONS
-- ============================================

-- Function to update the updated_at timestamp
create or replace function update_updated_at_column()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

-- Create triggers to auto-update updated_at
create trigger update_neuraforz_faqs_updated_at
  before update on neuraforz_faqs
  for each row
  execute function update_updated_at_column();

create trigger update_neuraforz_chat_sessions_updated_at
  before update on neuraforz_chat_sessions
  for each row
  execute function update_updated_at_column();

-- ============================================
-- VERIFICATION QUERIES
-- ============================================
-- Run these after setup to verify everything works

-- Check if pgvector extension is enabled
-- select * from pg_extension where extname = 'vector';

-- Check table structure
-- \d neuraforz_faqs

-- Check if function exists
-- \df match_faqs

-- ============================================
-- NEXT STEPS
-- ============================================
-- 1. ✅ Run this SQL script in Supabase SQL Editor
-- 2. ⏭️  Seed FAQs: Make POST request to /api/faq/seed
-- 3. ⏭️  Test chatbot on your website
-- 4. ⏭️  Monitor usage in Supabase Dashboard > Database > Tables
-- ============================================
