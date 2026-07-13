# Deployment Guide - Amrut's Portfolio

This guide covers deploying your professional robotics portfolio to various platforms.

## Quick Start - Vercel (Recommended)

The easiest way to deploy this Next.js portfolio is on Vercel, which is built by the creators of Next.js.

### Option 1: Deploy via Vercel Dashboard

1. **Push to GitHub** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Professional robotics portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Click "Import"
   - Vercel will auto-detect Next.js and configure everything
   - Click "Deploy"

3. **Custom Domain** (Optional):
   - Go to your project settings in Vercel
   - Click "Domains"
   - Add your domain (e.g., amrut.dev)
   - Follow DNS configuration instructions

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```
   - Follow the prompts
   - Verify deployment URL
   - Done!

## Alternative Deployment Options

### Netlify

1. **Push to GitHub** (same as above)

2. **Connect Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Select GitHub and authorize
   - Choose your repository
   - Set build command: `pnpm build`
   - Set publish directory: `.next`
   - Click "Deploy site"

### Self-Hosted (AWS, DigitalOcean, etc.)

1. **Build for production**:
   ```bash
   pnpm build
   ```

2. **Run on your server**:
   ```bash
   pnpm start
   ```

3. **With Node.js** (Recommended):
   - Install Node.js 18+ on your server
   - Copy your `.next` folder and `package.json`
   - Run `pnpm install --production`
   - Run `pnpm start`

### Docker Deployment

1. **Create Dockerfile**:
   ```dockerfile
   FROM node:18-alpine
   WORKDIR /app
   COPY package*.json ./
   RUN npm install --production
   COPY .next ./.next
   EXPOSE 3000
   CMD ["npm", "start"]
   ```

2. **Build and run**:
   ```bash
   docker build -t portfolio .
   docker run -p 3000:3000 portfolio
   ```

## Environment Variables

Currently, no environment variables are required. The portfolio works out of the box with all content hardcoded.

If you want to add dynamic features later, update `.env.local` with:
```
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## Performance Optimization

Your portfolio is already optimized with:
- ✅ Image optimization (Tailwind CSS handles styling)
- ✅ Code splitting and lazy loading
- ✅ Minimal animations (Framer Motion)
- ✅ Smooth scrolling
- ✅ SEO-friendly metadata
- ✅ Production-ready build

## Monitoring & Analytics

Add monitoring to track site performance:

### Vercel Analytics (Built-in)
- Enable in Vercel dashboard under "Analytics"
- Tracks Web Vitals, page views, and performance

### Google Analytics
1. Create a Google Analytics property
2. Add to your layout.tsx:
   ```tsx
   import { GoogleAnalytics } from '@next/third-parties/google'
   
   export default function RootLayout() {
     return (
       <html>
         <body>
           {children}
           <GoogleAnalytics gaId="YOUR_GA_ID" />
         </body>
       </html>
     )
   }
   ```

## SSL/TLS Certificate

- **Vercel**: Automatic SSL for all deployments
- **Netlify**: Automatic SSL for all deployments
- **Self-hosted**: Use Let's Encrypt (free) with Nginx/Apache

## CDN & Caching

The portfolio uses Next.js built-in CDN caching:
- Static pages are cached globally
- Revalidation happens automatically
- Images are optimized on-the-fly

## Troubleshooting

### Build fails on Vercel
- Check Node.js version (18+ required)
- Verify package.json exists
- Clear build cache: Project Settings → Git → Clear build cache

### Styles not loading
- Ensure `globals.css` is imported in layout.tsx
- Check Tailwind config is present
- Clear browser cache (Cmd+Shift+Delete)

### Slow performance
- Run performance audit: `pnpm build && pnpm start`
- Check image sizes
- Minimize external scripts

## Backup & Recovery

- Your code is automatically backed up on GitHub
- Vercel keeps deployment history (30 days default)
- Download your code regularly: `git clone YOUR_REPO`

## Next Steps

1. **Connect your domain** - Point your domain DNS to your hosting provider
2. **Add Google Analytics** - Track visitor behavior
3. **Update content** - Customize with your own information
4. **Share & iterate** - Collect feedback from recruiters and improve

## Support

For deployment issues:
- Vercel: [vercel.com/support](https://vercel.com/support)
- Netlify: [netlify.com/support](https://netlify.com/support)
- GitHub: Check Actions tab for build logs
