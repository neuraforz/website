# Quick Deploy to Hostinger - neuraforz.com

## 🚀 Quick Start (5 Steps)

### Step 1: Build for Static Hosting
```bash
npm run deploy:prepare
```

This will:
- Configure Next.js for static export
- Use static data instead of database
- Build all files into the `out` folder

### Step 2: Login to Hostinger
1. Go to https://hpanel.hostinger.com/
2. Login with your credentials
3. Navigate to **Files** → **File Manager**

### Step 3: Prepare public_html
1. Go to the `public_html` folder (or your domain's folder)
2. **Delete all existing files** in this folder (if any)
3. Keep the folder open

### Step 4: Upload Files
1. From your local `out` folder, upload **ALL files and folders**
2. Make sure to upload:
   - All HTML files
   - `_next` folder (contains CSS/JS)
   - All other assets
3. Upload the `.htaccess` file from your `public` folder to `public_html`

### Step 5: Verify
1. Visit https://neuraforz.com
2. Test all pages and features
3. Check mobile responsiveness

---

## 📁 File Upload Options

### Option A: File Manager (Easiest)
1. Use Hostinger's File Manager
2. Upload via drag-and-drop
3. Or use the "Upload Files" button

### Option B: FTP (Faster for large uploads)
1. Get FTP credentials from hPanel → **Files** → **FTP Accounts**
2. Use FileZilla or any FTP client
3. Connect and upload `out` folder contents to `public_html`

---

## ⚙️ Important Configuration

### SSL Certificate
1. In hPanel, go to **Security** → **SSL**
2. Ensure SSL is enabled for neuraforz.com
3. The .htaccess file will auto-redirect HTTP → HTTPS

### Domain Nameservers
Make sure neuraforz.com points to Hostinger:
1. Check in hPanel → **Domains** → neuraforz.com
2. Note the nameservers
3. Update at your domain registrar if different

---

## 🔄 Updating Your Website

When you make changes:

```bash
# 1. Make your changes to the code
# 2. Run the deploy preparation
npm run deploy:prepare

# 3. Upload new files from 'out' folder to public_html
# (overwrite existing files)
```

---

## ❌ Troubleshooting

### Issue: Pages show 404 errors
**Solution**: Make sure `.htaccess` file is uploaded to `public_html`

### Issue: Styles not loading
**Solution**: Ensure `_next` folder is uploaded completely

### Issue: Site not loading at all
**Solution**: 
1. Check if files are in `public_html` (not in a subdirectory)
2. Verify nameservers are pointing to Hostinger
3. Check if SSL is properly configured

---

## 📋 Deployment Checklist

Before going live:

- [ ] Run `npm run deploy:prepare` successfully
- [ ] Verify `out` folder has all files
- [ ] Login to Hostinger hPanel
- [ ] Clear `public_html` folder
- [ ] Upload all contents from `out` folder
- [ ] Upload `.htaccess` from `public/` folder
- [ ] Test homepage loads at neuraforz.com
- [ ] Test "Watch Demo" button works
- [ ] Test all navigation links
- [ ] Check mobile responsiveness
- [ ] Verify SSL certificate is active
- [ ] Test contact form (if applicable)

---

## 🎯 What Gets Deployed

Your static site includes:
- ✅ All pages (Home, About, Services, Contact, etc.)
- ✅ Neural network animations
- ✅ Client logos with brand colors and glows
- ✅ Watch Demo popup (with working close button)
- ✅ All infographics and visualizations
- ✅ Responsive design for mobile/tablet/desktop
- ✅ Optimized images and assets

**Note**: Database features (Prisma) are replaced with static data for Hostinger deployment.

---

## 🔐 Security Reminders

- ✅ Never commit `.env` files
- ✅ SSL is automatically enabled via .htaccess
- ✅ Security headers are configured in .htaccess
- ✅ Hidden files are protected

---

## 📞 Need Help?

- **Hostinger Support**: Available 24/7 via chat in hPanel
- **Documentation**: HOSTINGER_DEPLOYMENT_GUIDE.md (detailed version)
- **Next.js Docs**: https://nextjs.org/docs/app/building-your-application/deploying/static-exports

---

## 🎉 Alternative: Easy Deploy with Vercel

For a simpler deployment (with full Next.js features):

1. Push code to GitHub
2. Connect GitHub to Vercel (https://vercel.com)
3. Auto-deploys on every commit
4. Point neuraforz.com to Vercel
5. Free hosting with full Next.js support

This avoids the need for static export and manual uploads.

---

**Last Updated**: November 11, 2025
**Domain**: neuraforz.com
