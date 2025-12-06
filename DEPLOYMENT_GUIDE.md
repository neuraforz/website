# Digitect Solutions Website - Deployment Guide

Complete guide for deploying the Next.js 14 website to production.

## 📋 Pre-Deployment Checklist

### 1. Code Quality
- [ ] All TypeScript errors resolved
- [ ] ESLint passes without errors
- [ ] Build completes successfully (`npm run build`)
- [ ] All environment variables documented

### 2. Database
- [ ] PostgreSQL database provisioned
- [ ] Database connection string obtained
- [ ] Schema pushed (`npx prisma db push`)
- [ ] Seed data loaded (`npx prisma db seed`)
- [ ] Backups configured

### 3. Content
- [ ] All 6 services have complete content
- [ ] All images uploaded to `/public`
- [ ] FAQs written for each service
- [ ] Case studies added with metrics
- [ ] Blog posts created
- [ ] Team members added

### 4. Configuration
- [ ] Environment variables set
- [ ] SMTP credentials configured
- [ ] Analytics tracking ID added
- [ ] CRM webhook configured (optional)
- [ ] reCAPTCHA keys obtained

### 5. Testing
- [ ] Test contact form submission
- [ ] Verify email notifications work
- [ ] Check all links and navigation
- [ ] Test on mobile devices
- [ ] Run Lighthouse audit
- [ ] Verify accessibility with screen reader

## 🚀 Deployment Options

### Option 1: Vercel (Recommended)

**Why Vercel?**
- Built by Next.js creators
- Zero-config deployment
- Automatic HTTPS
- Global CDN
- Edge functions support
- Free for hobby projects

**Steps:**

1. **Install Vercel CLI**
```bash
npm i -g vercel
```

2. **Login to Vercel**
```bash
vercel login
```

3. **Deploy from project directory**
```bash
cd website-nextjs
vercel
```

4. **Configure Environment Variables**

Go to Vercel dashboard → Your Project → Settings → Environment Variables

Add these variables:
```
DATABASE_URL=postgresql://user:pass@host:5432/dbname
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_SITE_NAME=Digitect Solutions
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASSWORD=SG.xxxxx
SMTP_FROM=noreply@digitectsolutions.com
```

5. **Connect Custom Domain**
- Go to Settings → Domains
- Add your domain
- Configure DNS records as shown

6. **Deploy to Production**
```bash
vercel --prod
```

**Post-Deployment:**
- Visit your domain
- Test contact form
- Check Vercel Analytics
- Monitor function logs

---

### Option 2: Netlify

**Steps:**

1. **Build Command:** `npm run build`
2. **Publish Directory:** `.next`
3. **Environment Variables:** Same as Vercel
4. **Custom Domain:** Add in Netlify dashboard
5. **Deploy:** Push to Git or use Netlify CLI

```bash
# Using Netlify CLI
npm i -g netlify-cli
netlify login
netlify deploy --prod
```

---

### Option 3: Railway

**Steps:**

1. Go to https://railway.app
2. Click "New Project"
3. Select "Deploy from GitHub repo"
4. Add PostgreSQL database (one-click)
5. Set environment variables
6. Railway auto-detects Next.js and deploys

**Environment Variables:**
- DATABASE_URL (auto-set by Railway)
- Add other variables manually

---

### Option 4: AWS Amplify

**Steps:**

1. Go to AWS Amplify console
2. Connect your Git repository
3. Build settings (auto-detected for Next.js)
4. Add environment variables
5. Deploy

**Custom Build Settings:**
```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
        - npx prisma generate
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: .next
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

---

### Option 5: Digital Ocean App Platform

**Steps:**

1. Create a PostgreSQL database in Digital Ocean
2. Go to App Platform
3. Connect GitHub repository
4. Choose Next.js 14 preset
5. Add environment variables
6. Deploy

**Cost:** $12-25/month depending on resources

---

### Option 6: Self-Hosted (VPS/Dedicated Server)

**Requirements:**
- Ubuntu 22.04 LTS or similar
- Node.js 18+
- PostgreSQL 15+
- Nginx or Apache
- SSL certificate (Let's Encrypt)

**Steps:**

1. **Provision Server**
```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Install PostgreSQL
sudo apt install postgresql postgresql-contrib

# Install Nginx
sudo apt install nginx

# Install PM2 for process management
sudo npm install -g pm2
```

2. **Set Up Database**
```bash
sudo -u postgres psql
CREATE DATABASE digitect_db;
CREATE USER digitect_user WITH PASSWORD 'your_password';
GRANT ALL PRIVILEGES ON DATABASE digitect_db TO digitect_user;
\q
```

3. **Deploy Application**
```bash
# Clone repository
git clone https://github.com/your-org/digitect-website.git
cd digitect-website/website-nextjs

# Install dependencies
npm ci

# Set up environment
cp .env.example .env
# Edit .env with your values
nano .env

# Initialize database
npx prisma db push
npx prisma db seed

# Build application
npm run build

# Start with PM2
pm2 start npm --name "digitect-web" -- start
pm2 save
pm2 startup
```

4. **Configure Nginx**
```bash
sudo nano /etc/nginx/sites-available/digitect
```

```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

```bash
# Enable site
sudo ln -s /etc/nginx/sites-available/digitect /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

5. **Set Up SSL with Let's Encrypt**
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

6. **Configure Automatic Deployments**
```bash
# Create deploy script
nano ~/deploy.sh
```

```bash
#!/bin/bash
cd /path/to/digitect-website/website-nextjs
git pull origin main
npm ci
npx prisma db push
npm run build
pm2 reload digitect-web
```

```bash
chmod +x ~/deploy.sh
```

---

## 🔐 Security Configuration

### 1. Environment Variables
**Never commit these to Git:**
- Database credentials
- API keys
- SMTP passwords
- CRM webhooks
- reCAPTCHA secrets

### 2. HTTPS Setup
- Obtain SSL certificate (Let's Encrypt is free)
- Enable HSTS headers
- Configure secure cookies

### 3. Database Security
- Use strong passwords
- Enable SSL connection
- Restrict access to specific IPs
- Regular backups

### 4. Rate Limiting
Add to Next.js config or use Cloudflare:
- Contact form: 5 submissions/hour/IP
- API routes: 100 requests/min/IP

### 5. Content Security Policy
Add to next.config.mjs:
```javascript
async headers() {
  return [
    {
      source: '/:path*',
      headers: [
        {
          key: 'Content-Security-Policy',
          value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline';"
        }
      ]
    }
  ];
}
```

---

## 📊 Monitoring & Analytics

### 1. Google Analytics
1. Get GA4 tracking ID
2. Add to `.env`: `NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX`
3. Verify tracking in GA dashboard

### 2. Vercel Analytics (if using Vercel)
- Enable in project settings
- View real-time metrics
- Monitor Core Web Vitals

### 3. Error Tracking
**Options:**
- Sentry
- LogRocket
- Rollbar

**Setup example (Sentry):**
```bash
npm install @sentry/nextjs
npx @sentry/wizard@latest -i nextjs
```

### 4. Uptime Monitoring
**Recommended services:**
- UptimeRobot (free tier available)
- Pingdom
- StatusCake

---

## 🔄 CI/CD Pipeline

### GitHub Actions Example

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: |
          cd website-nextjs
          npm ci
          
      - name: Run tests
        run: |
          cd website-nextjs
          npm run lint
          
      - name: Build
        run: |
          cd website-nextjs
          npm run build
          
      - name: Deploy to Vercel
        run: |
          cd website-nextjs
          npx vercel --prod --token ${{ secrets.VERCEL_TOKEN }}
        env:
          VERCEL_TOKEN: ${{ secrets.VERCEL_TOKEN }}
          VERCEL_ORG_ID: ${{ secrets.VERCEL_ORG_ID }}
          VERCEL_PROJECT_ID: ${{ secrets.VERCEL_PROJECT_ID }}
```

---

## 🗄️ Database Management

### Backups

**Automated daily backups:**

```bash
#!/bin/bash
# backup-db.sh

BACKUP_DIR="/backups/digitect"
DATE=$(date +%Y%m%d_%H%M%S)
DB_NAME="digitect_db"

mkdir -p $BACKUP_DIR
pg_dump $DB_NAME > "$BACKUP_DIR/backup_$DATE.sql"

# Keep only last 30 days
find $BACKUP_DIR -name "backup_*.sql" -mtime +30 -delete
```

**Add to crontab:**
```bash
0 2 * * * /path/to/backup-db.sh
```

### Migrations

When schema changes:
```bash
# Create migration
npx prisma migrate dev --name describe_change

# Apply to production
npx prisma migrate deploy
```

### Prisma Studio (Database GUI)
```bash
npx prisma studio
```
Access at http://localhost:5555

---

## 🔧 Troubleshooting

### Build Fails
```bash
# Clear cache
rm -rf .next node_modules
npm install
npm run build
```

### Database Connection Issues
- Check DATABASE_URL format
- Verify database is accessible
- Check firewall rules
- Test with psql:
```bash
psql "postgresql://user:pass@host:5432/dbname"
```

### Images Not Loading
- Check `/public` folder structure
- Verify Next.js image domains in config
- Check file permissions

### Slow Page Loads
- Run Lighthouse audit
- Check database query performance
- Enable caching
- Optimize images
- Use CDN

---

## 📈 Performance Optimization

### 1. Image Optimization
- Use Next.js Image component
- Convert to AVIF/WebP
- Lazy load below-fold images
- Proper sizing

### 2. Code Splitting
- Automatic with Next.js App Router
- Dynamic imports for heavy components
- Route-based splitting

### 3. Caching
- Static pages: ISR (Incremental Static Regeneration)
- API routes: Cache-Control headers
- CDN caching

### 4. Database
- Add indexes on frequently queried columns
- Use connection pooling
- Optimize queries

---

## ✅ Post-Deployment Tasks

- [ ] Test all forms
- [ ] Verify email notifications
- [ ] Check contact form spam protection
- [ ] Test on multiple devices
- [ ] Run Lighthouse audit (target: 90+)
- [ ] Verify SEO meta tags
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google Analytics
- [ ] Configure uptime monitoring
- [ ] Test backup/restore process
- [ ] Document any custom configurations

---

## 🆘 Support & Maintenance

### Regular Maintenance Tasks

**Weekly:**
- Check error logs
- Review analytics
- Test contact form
- Monitor uptime

**Monthly:**
- Review performance metrics
- Update dependencies
- Check SSL certificate expiry
- Review database backups

**Quarterly:**
- Security audit
- Performance optimization
- Content review
- Dependency major updates

### Getting Help

- **Documentation**: See `/docs` folder
- **Issues**: GitHub Issues
- **Email**: dev@digitectsolutions.com

---

## 📝 Deployment Log Template

```markdown
## Deployment: [Date]

**Version:** v1.0.0
**Branch:** main
**Commit:** abc123

### Changes
- Feature: Added new service page
- Fix: Resolved mobile menu issue
- Update: Updated pricing information

### Pre-Deployment
- [x] Tests passed
- [x] Build successful
- [x] Staging tested
- [x] Database backed up

### Deployment Steps
1. Backed up database
2. Deployed to production
3. Ran smoke tests
4. Verified functionality

### Post-Deployment
- [x] Contact form working
- [x] All pages loading
- [x] No console errors
- [x] Performance metrics acceptable

### Issues
- None

### Rollback Plan
- Revert to commit xyz789
- Restore database backup from 2024-01-15
```

---

**Deployment successful! 🎉**

For questions, contact the development team.
