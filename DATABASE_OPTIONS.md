# Database Options for Next.js Website

## Current Situation
✅ MySQL is installed (used by your current PHP website)
❌ PostgreSQL is NOT installed

## Option 1: Use MySQL Instead (Recommended - Easiest)

Since you already have MySQL running, we can modify the Prisma schema to use MySQL instead of PostgreSQL.

### Steps:

1. **Update Prisma Schema**
   Edit `prisma/schema.prisma`:
   ```prisma
   datasource db {
     provider = "mysql"  // Changed from "postgresql"
     url      = env("DATABASE_URL")
   }
   ```

2. **Update .env file**
   ```bash
   DATABASE_URL="mysql://root:your_password@localhost:3306/digitect_nextjs"
   ```

3. **Create Database**
   ```sql
   CREATE DATABASE digitect_nextjs;
   ```

4. **Initialize**
   ```bash
   cd website-nextjs
   npm install
   npx prisma db push
   npx prisma db seed
   npm run dev
   ```

### Pros:
✅ No new software to install
✅ Works with your existing MySQL setup
✅ Same performance for this use case
✅ Can start immediately

### Cons:
⚠️ Some advanced PostgreSQL features not available (not needed for this project)

---

## Option 2: Install PostgreSQL Locally

### For Windows:

1. **Download PostgreSQL**
   - Visit: https://www.postgresql.org/download/windows/
   - Download installer (recommended version 15 or 16)
   - Run installer

2. **During Installation**
   - Remember the password you set for 'postgres' user
   - Default port: 5432
   - Install pgAdmin (GUI tool) - optional but helpful

3. **After Installation**
   - Open pgAdmin or command line
   - Create database:
   ```sql
   CREATE DATABASE digitect_nextjs;
   ```

4. **Update .env file**
   ```bash
   DATABASE_URL="postgresql://postgres:your_password@localhost:5432/digitect_nextjs"
   ```

5. **Initialize**
   ```bash
   cd website-nextjs
   npm install
   npx prisma db push
   npx prisma db seed
   npm run dev
   ```

### Pros:
✅ Matches production environment (if deploying to Vercel/Railway)
✅ Advanced features available
✅ Better for complex queries

### Cons:
⚠️ Requires ~200MB disk space
⚠️ 15-30 minutes to install and configure
⚠️ Another database server to maintain

---

## Option 3: Use Cloud PostgreSQL (For Development)

### Recommended Services:

1. **Supabase (Free Tier)**
   - Visit: https://supabase.com
   - Create free account
   - Create new project
   - Get connection string from Settings → Database
   - Free tier: 500MB storage, good for development

2. **Railway (Free Tier)**
   - Visit: https://railway.app
   - Create free account
   - Create PostgreSQL database
   - Copy connection string
   - Free tier: Limited hours per month

3. **Neon (Free Tier)**
   - Visit: https://neon.tech
   - Serverless PostgreSQL
   - Free tier: 10GB storage
   - Copy connection string

### Steps for Cloud Database:
1. Sign up for one of the services above
2. Create a database
3. Copy the connection string
4. Update `.env` file with the connection string
5. Run: `npx prisma db push && npx prisma db seed`

### Pros:
✅ No local installation needed
✅ Accessible from anywhere
✅ Automatic backups (most services)
✅ Free tier sufficient for development

### Cons:
⚠️ Requires internet connection
⚠️ Slightly slower than local database
⚠️ Free tier limitations

---

## Option 4: Use SQLite (Simplest - For Testing Only)

### Quick Setup:

1. **Update Prisma Schema**
   ```prisma
   datasource db {
     provider = "sqlite"
     url      = "file:./dev.db"
   }
   ```

2. **Initialize**
   ```bash
   npx prisma db push
   npx prisma db seed
   ```

### Pros:
✅ Zero configuration
✅ File-based database
✅ Perfect for testing

### Cons:
⚠️ Not suitable for production
⚠️ Limited concurrent connections
⚠️ Some features not supported

---

## My Recommendation

### For Immediate Start: **Option 1 - Use MySQL**
You can start working right now with your existing MySQL installation. Just need to:
1. Change one line in `prisma/schema.prisma`
2. Update `.env` with MySQL connection
3. Run the setup commands

### For Production-Like Setup: **Option 2 - Install PostgreSQL**
If you plan to deploy to Vercel, Railway, or similar platforms, they typically use PostgreSQL. Installing it locally gives you a consistent development experience.

### For Quick Testing: **Option 4 - SQLite**
If you just want to see the website running quickly without any database setup.

---

## Quick Start Guide - MySQL Option

Here's exactly what to do to use MySQL:

```bash
# 1. Navigate to project
cd website-nextjs

# 2. Edit prisma/schema.prisma
# Change line 7 from:
#   provider = "postgresql"
# To:
#   provider = "mysql"

# 3. Create .env file
echo DATABASE_URL="mysql://root:your_mysql_password@localhost:3306/digitect_nextjs" > .env

# 4. Create database in MySQL
mysql -u root -p
CREATE DATABASE digitect_nextjs;
exit;

# 5. Install dependencies
npm install

# 6. Initialize database
npx prisma generate
npx prisma db push
npx prisma db seed

# 7. Start development server
npm run dev
```

Then visit: http://localhost:3000

---

## Need Help?

If you get stuck:
1. Check the error message
2. Ensure MySQL is running
3. Verify your password in .env
4. Make sure the database is created

**Which option would you like to use?**
