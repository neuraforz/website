# Security Best Practices

## Environment Variables

### What's Protected
- `.env` is in `.gitignore` and NEVER committed to git
- Real API keys, database credentials, and secrets are in `.env` (local only)
- `.env.example` contains ONLY placeholder values (safe to commit)

### Current Secrets
The following sensitive values are in `.env` and protected:
- `GROQ_API_KEY` - Groq AI API key
- `OPENAI_API_KEY` - OpenAI API key (optional)
- `ANTHROPIC_API_KEY` - Anthropic/Claude API key (optional)
- `GOOGLE_API_KEY` - Google/Gemini API key (optional)
- `SUPABASE_SERVICE_ROLE_KEY` - Supabase admin key
- `DATABASE_URL` - MySQL connection string with password
- `SMTP_PASSWORD` - Email SMTP password

### Setup for New Developers
1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Replace placeholder values with real credentials:
   ```env
   GROQ_API_KEY=gsk_actual_key_here
   NEXT_PUBLIC_SUPABASE_URL=https://actual-project.supabase.co
   SUPABASE_SERVICE_ROLE_KEY=actual_key_here
   ```

3. NEVER commit `.env` to git

### Production Deployment
For Vercel/Netlify/other platforms:
1. Add environment variables in the platform's dashboard
2. DO NOT use `.env` in production
3. Use platform's environment variable system

### If Secrets Are Leaked
If `.env` or any secrets are accidentally committed:

1. **Immediately rotate all exposed credentials**:
   - Regenerate Groq API key at https://console.groq.com/keys
   - Regenerate Supabase keys in dashboard
   - Change database password
   - Update SMTP credentials

2. **Remove from git history**:
   ```bash
   git filter-branch --force --index-filter \
     "git rm --cached --ignore-unmatch .env" \
     --prune-empty --tag-name-filter cat -- --all
   ```

3. **Force push** (⚠️ Warning: This rewrites history):
   ```bash
   git push origin --force --all
   ```

4. **Update all team members** to fetch the cleaned history

### Verification
Run this command to verify `.env` is not tracked:
```bash
git ls-files | grep -E "^\.env$"
```

Should return nothing (empty output = secure).

## Additional Security Measures

### API Rate Limiting
- Implement rate limiting on `/api/chat` endpoint in production
- Monitor API usage in provider dashboards

### Database Security
- Supabase RLS (Row Level Security) is enabled
- Service role key is kept secret (never exposed to client)
- Public anon key is safe to expose (limited permissions)

### CORS and Headers
- Configure CORS appropriately for production domain
- Add security headers in `next.config.js` if needed

## Reporting Security Issues
If you discover a security vulnerability, please email:
security@neuraforz.com

DO NOT open a public GitHub issue for security vulnerabilities.
