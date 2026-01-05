# ashraymalhotra.com

A minimal personal landing page built with Next.js and Tailwind CSS.

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

## Customize Your Content

Edit `app/page.tsx` to update:
- Your one-liner bio
- Twitter handle
- LinkedIn profile URL
- GitHub username
- Email address

Edit `app/layout.tsx` to update:
- SEO title and description
- Open Graph metadata

## Deploy to Vercel

### Step 1: Push to GitHub (optional but recommended)

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### Step 2: Deploy

Option A - Via Vercel Dashboard:
1. Go to https://vercel.com
2. Click "New Project"
3. Import your GitHub repo (or drag & drop the folder)
4. Click "Deploy"

Option B - Via CLI:
```bash
npx vercel
# Follow the prompts
```

### Step 3: Add Custom Domain

1. In Vercel Dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add `ashraymalhotra.com`
4. Vercel will show you the DNS records to add

### Step 4: Configure Namecheap DNS

In Namecheap, go to Domain List → Manage → Advanced DNS, and add:

| Type  | Host    | Value                           |
|-------|---------|----------------------------------|
| A     | @       | 76.76.21.21                     |
| CNAME | www     | cname.vercel-dns.com            |

Wait 5-30 minutes for DNS to propagate.

## Setup Substack (for writing.ashraymalhotra.com)

1. Create a publication at https://substack.com
2. Go to Settings → Publication details → Custom domain
3. Enter `writing.ashraymalhotra.com`
4. In Namecheap, add this DNS record:

| Type  | Host    | Value                                  |
|-------|---------|----------------------------------------|
| CNAME | writing | target.substack-custom-domains.com    |

5. Wait for Substack to verify (can take up to 48 hours)

## Project Structure

```
landing-page/
├── app/
│   ├── layout.tsx    ← Font, metadata, wrapper
│   ├── page.tsx      ← Your landing page (EDIT THIS)
│   ├── globals.css   ← Styles
│   ├── sitemap.ts    ← Auto-generated sitemap
│   └── robots.ts     ← SEO robots.txt
├── public/           ← Static files (favicon, images)
└── package.json
```

## Need Help?

- Next.js docs: https://nextjs.org/docs
- Tailwind docs: https://tailwindcss.com/docs
- Vercel docs: https://vercel.com/docs
