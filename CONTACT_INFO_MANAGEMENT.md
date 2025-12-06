# Contact Information Management Guide

## ✅ Updates Completed

The following contact information has been updated across the entire site:

- **Email**: support@neuraforz.com
- **Phone**: +1 (773) 888-9957

### Files Updated:
1. `components/footer.tsx` - Footer component (appears on all pages)
2. `app/contact/page.tsx` - Contact page

---

## Admin Panel Options

Currently, the contact information is hardcoded in the components. Here are your options for future management:

### Option 1: Environment Variables (Simple & Quick) ⭐ RECOMMENDED

**Pros:**
- Easy to implement
- No database required
- Secure (not exposed in client code)
- Works well with deployment platforms

**Implementation:**

1. Create/update `.env.local`:
```env
NEXT_PUBLIC_COMPANY_EMAIL=support@neuraforz.com
NEXT_PUBLIC_COMPANY_PHONE=+1 (773) 888-9957
NEXT_PUBLIC_COMPANY_LOCATION=Chicago, IL
NEXT_PUBLIC_COMPANY_NAME=Neuraforz
```

2. Update components to use these variables:
```typescript
const email = process.env.NEXT_PUBLIC_COMPANY_EMAIL;
const phone = process.env.NEXT_PUBLIC_COMPANY_PHONE;
```

3. To change info: Update `.env.local` and rebuild the site

**When to use:** Best for information that doesn't change frequently

---

### Option 2: Database + Admin Dashboard (Dynamic)

**Pros:**
- Real-time updates (no rebuild needed)
- Full admin interface
- Can manage all site content
- Track change history

**Implementation:**

1. Use your existing Prisma setup
2. Create a Settings model:
```prisma
model SiteSettings {
  id        String   @id @default(cuid())
  key       String   @unique
  value     String
  updatedAt DateTime @updatedAt
}
```

3. Build an admin dashboard with:
   - Login/authentication
   - Settings management page
   - Real-time preview

4. Create API routes to fetch settings

**When to use:** If you need frequent updates or multiple administrators

---

### Option 3: Configuration File (Middle Ground)

**Pros:**
- Easy to edit
- Version controlled
- No database needed
- Can be edited without coding knowledge

**Implementation:**

1. Create `config/site-config.ts`:
```typescript
export const siteConfig = {
  company: {
    name: "Neuraforz",
    email: "support@neuraforz.com",
    phone: "+1 (773) 888-9957",
    location: "Chicago, IL",
  },
  social: {
    linkedin: "#",
    twitter: "#",
    github: "#",
  },
};
```

2. Import in components:
```typescript
import { siteConfig } from "@/config/site-config";

// Use like this:
{siteConfig.company.email}
```

3. To change: Edit the config file and rebuild

**When to use:** Good balance of simplicity and organization

---

## Current Status & Next Steps

### ✅ What's Working Now
- All contact information has been updated to your specifications
- Information is consistent across Footer and Contact page
- Site is fully functional

### 🔧 To Implement Admin Panel

**Quick Solution (2-3 hours):**
- Implement Option 1 (Environment Variables)
- This gives you easy management without coding

**Full Admin Solution (1-2 days):**
- Implement Option 2 (Database + Dashboard)
- Create admin authentication
- Build settings management UI
- Add change tracking

### Recommended Approach

For immediate needs: **Use Option 1 (Environment Variables)**

For long-term scalability: **Plan Option 2 (Admin Dashboard)**

---

## Implementation Priority

If you'd like me to implement any of these options, I recommend this order:

1. **Phase 1** (Now): Environment variables for contact info
2. **Phase 2** (Next): Create simple admin dashboard
3. **Phase 3** (Later): Expand to full CMS capabilities

---

## Contact Information Locations

Current files containing contact information:
- `components/footer.tsx` - Line 95-102
- `app/contact/page.tsx` - Line 179-201

If implementing centralized config, these would be updated to reference the central source.

---

## Questions?

Let me know if you'd like me to:
- Implement environment variables approach
- Create a configuration file
- Build a full admin dashboard
- Something else?
