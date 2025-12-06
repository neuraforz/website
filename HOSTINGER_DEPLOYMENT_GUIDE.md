# Hostinger Deployment Guide for neuraforz.com

## 🚨 Important Security Notice

**DO NOT share login credentials with AI tools or in code repositories.**

---

## Deployment Options for Hostinger

Hostinger supports multiple deployment methods for Next.js applications:

### Option 1: Static Export (Recommended for Hostinger)
### Option 2: Node.js Hosting
### Option 3: Using Hostinger's Git Integration

---

## 🎯 Recommended: Static Export Method

Next.js can be exported as a static site, which works perfectly with Hostinger's shared hosting.

### Step 1: Update next.config.mjs for Static Export

Add the following to your `next.config.mjs`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
```

### Step 2: Remove Server-Side Features

Since you're using Prisma (database), you'll need to either:

**Option A: Remove database features for static export**
- Comment out or remove Prisma queries from pages
- Use static data instead

**Option B: Use API routes with a different backend**
- Deploy database and API separately (e.g., Vercel, Railway, etc.)
- Update your app to fetch from those APIs

### Step 3: Build the Static Site

```bash
npm run build
```

This creates an `out` folder with static HTML/CSS/JS files.

### Step 4: Upload to Hostinger

1. **Login to Hostinger Control Panel (hPanel)**
   - Go to: https://hpanel.hostinger.com/
   - Login with your credentials

2. **Access File Manager**
   - Navigate to "Files" → "File Manager"
   - Go to `public_html` folder (or your domain's folder)

3. **Upload Files**
   - Delete existing files in `public_html` (if any)
   - Upload ALL contents from the `out` folder
   - Make sure `.htaccess` is configured properly

4. **Create .htaccess File**

Create a `.htaccess` file in `public_html` with:

```apache
# Enable HTTPS redirect
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Handle Next.js routing
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ /$1.html [L]

# Fallback to index
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^ /index.html [L]
```

---

## 🚀 Alternative: Node.js Hosting (If Supported)

If your Hostinger plan supports Node.js:

### Step 1: Check Node.js Support
- Login to hPanel
- Check if "Node.js" option is available in hosting features

### Step 2: Setup Node.js Application

1. Enable Node.js in hPanel
2. Set Node.js version to 18.x or higher
3. Set application root to your project folder
4. Set application startup file to `.next/standalone/server.js`

### Step 3: Update next.config.mjs

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
};

export default nextConfig;
```

### Step 4: Build and Deploy

```bash
npm run build
# Upload entire project via FTP/SFTP
```

---

## 📁 FTP/SFTP Upload Instructions

### Get FTP Credentials from Hostinger:

1. Login to hPanel
2. Go to "Files" → "FTP Accounts"
3. Note down:
   - FTP Host
   - Username
   - Password
   - Port (usually 21 for FTP, 22 for SFTP)

### Using FileZilla (Recommended):

1. Download FileZilla: https://filezilla-project.org/
2. Connect using your credentials
3. Navigate to `public_html`
4. Upload contents of `out` folder

---

## 🗄️ Database Setup

Your app uses Prisma with a database. Options:

### Option 1: Use Hostinger's MySQL Database

1. **Create Database in hPanel**
   - Go to "Databases" → "MySQL Databases"
   - Create new database
   - Create database user
   - Note credentials

2. **Update .env**
```env
DATABASE_URL="mysql://username:password@localhost:3306/database_name"
```

3. **Deploy Database Schema**
   - You'll need SSH access or phpMyAdmin to run Prisma migrations

### Option 2: Use External Database (Recommended)

Use a cloud database service:
- **PlanetScale** (free tier available)
- **Railway** (with PostgreSQL)
- **Supabase** (PostgreSQL)
- **MongoDB Atlas**

Then update your DATABASE_URL accordingly.

---

## 🔧 Pre-Deployment Checklist

- [ ] Remove or disable Prisma database calls if using static export
- [ ] Update `next.config.mjs` with `output: 'export'`
- [ ] Set `images.unoptimized: true` in config
- [ ] Test build locally: `npm run build`
- [ ] Check `out` folder is generated correctly
- [ ] Ensure all environment variables are set
- [ ] Test all pages work without server-side features
- [ ] Update contact form to use external API (if needed)

---

## 🌐 DNS Configuration

Make sure your domain points to Hostinger:

1. **Check Nameservers in hPanel**
   - Go to "Domains" → your domain
   - Note the nameservers (e.g., ns1.dns-parking.com)

2. **Update Domain Registrar**
   - If domain registered elsewhere, update nameservers
   - Or point A record to Hostinger's IP

---

## 📝 Step-by-Step Deployment Process

### For Static Export (Easiest):

```bash
# 1. Update configuration
# (manually edit next.config.mjs)

# 2. Build the project
npm run build

# 3. The 'out' folder now contains your static site

# 4. Upload via FTP:
# - Connect to Hostinger FTP
# - Navigate to public_html
# - Upload all contents from 'out' folder
# - Create .htaccess file (see above)

# 5. Visit neuraforz.com to verify
```

---

## ⚠️ Known Issues & Solutions

### Issue 1: Prisma Database Connection
**Problem**: Static export doesn't support server-side code
**Solution**: Remove database calls or use separate API backend

### Issue 2: Images Not Loading
**Problem**: Next.js Image Optimization doesn't work with static export
**Solution**: Add `images: { unoptimized: true }` to config

### Issue 3: 404 Errors on Routes
**Problem**: Hostinger doesn't handle Next.js routing automatically
**Solution**: Use the `.htaccess` configuration provided above

### Issue 4: Environment Variables
**Problem**: .env files won't work in static export
**Solution**: Use environment variables at build time or hardcode non-sensitive values

---

## 🔄 Updating Your Site

To update your website after initial deployment:

```bash
# 1. Make changes to your code
# 2. Build again
npm run build

# 3. Upload new 'out' folder contents via FTP
# (overwrite existing files)
```

---

## 🎥 Alternative: Use Vercel (Much Easier)

Since this is a Next.js app, consider using Vercel (made by Next.js creators):

1. Push code to GitHub
2. Connect GitHub to Vercel
3. Auto-deploys on every push
4. Free tier available
5. Full Next.js support (no need to modify code)

Then point neuraforz.com to Vercel using CNAME:
```
CNAME: www.neuraforz.com → cname.vercel-dns.com
A Record: neuraforz.com → 76.76.21.21
```

---

## 📞 Need Help?

If you encounter issues:
1. Check Hostinger's support documentation
2. Contact Hostinger support (24/7 chat available)
3. Consider using Vercel for easier Next.js deployment

---

## 🔐 Security Best Practices

1. Never commit `.env` files to Git
2. Use environment variables for sensitive data
3. Enable HTTPS (Hostinger provides free SSL)
4. Keep dependencies updated
5. Use strong database passwords

---

**Last Updated**: November 11, 2025
