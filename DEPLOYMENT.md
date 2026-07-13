# Deployment Guide

This guide covers deployment of your Robotics Engineer portfolio to various platforms.

## 🎯 Recommended: Vercel (Zero-Config)

### Why Vercel?
- Created by Next.js developers
- Zero-configuration deployment
- Global CDN for fast loading
- Free tier includes staging environments
- Optimal performance for Next.js apps
- Built-in analytics and monitoring

### Step 1: Prepare Your Code

1. Ensure code is committed to GitHub:
   ```bash
   git add .
   git commit -m "Portfolio website - ready for deployment"
   git push origin main
   ```

2. Verify build works locally:
   ```bash
   pnpm build
   ```

### Step 2: Deploy to Vercel

1. **Sign up/Login to Vercel**
   - Go to https://vercel.com
   - Sign up with GitHub account
   - Grant repository access

2. **Create New Project**
   - Click "New Project"
   - Select your GitHub repository
   - Vercel auto-detects Next.js and fills in settings
   - Click "Deploy"

3. **Monitor Deployment**
   - Vercel shows build progress
   - Deployment typically takes 2-5 minutes
   - Check logs for any build issues

4. **Access Your Portfolio**
   - Default URL: `https://<project-name>.vercel.app`
   - Vercel provides staging previews for each push

### Step 3: Custom Domain (Optional)

1. **Add Domain**
   - Go to Vercel Dashboard → Project → Settings → Domains
   - Enter your domain name
   - Click "Add"

2. **Configure DNS**
   - Vercel shows your DNS records to add:
     - CNAME record for `www` subdomain
     - Alias/A record for root domain
   - Add these to your domain registrar (GoDaddy, Namecheap, etc.)

3. **Verify Domain**
   - DNS propagation takes 15-48 hours
   - Vercel auto-verifies once configured
   - You'll receive a confirmation email

### Step 4: Continuous Deployment

- **Automatic Deployments**: Every push to `main` triggers deployment
- **Preview URLs**: Every pull request gets a preview URL
- **Rollback**: Previous deployments available in dashboard
- **Environment Variables**: Set in Vercel dashboard if needed

---

## 🚀 Alternative: Netlify

### Deploy via Netlify

1. **Push to GitHub** (same as Vercel)

2. **Connect to Netlify**
   - Go to https://netlify.com
   - Click "New site from Git"
   - Select GitHub, authorize, and choose repository

3. **Configure Build**
   - Build command: `pnpm build`
   - Publish directory: `.next`
   - Click "Deploy site"

4. **Wait for Deployment**
   - Netlify builds and deploys automatically
   - Typically takes 2-5 minutes
   - You'll get a random `.netlify.app` URL

5. **Add Custom Domain**
   - Netlify → Site Settings → Domain Management
   - Add your domain
   - Update DNS records as shown

**Note**: Ensure Next.js build works with Netlify by checking for any Node version issues.

---

## 🐳 Docker Deployment

### Build Docker Image

1. **Create Dockerfile** in project root:
   ```dockerfile
   FROM node:18-alpine

   WORKDIR /app

   # Copy package files
   COPY package.json pnpm-lock.yaml ./

   # Install dependencies
   RUN npm install -g pnpm && pnpm install --frozen-lockfile

   # Copy source code
   COPY . .

   # Build Next.js app
   RUN pnpm build

   # Expose port
   EXPOSE 3000

   # Start application
   CMD ["pnpm", "start"]
   ```

2. **Build Image**
   ```bash
   docker build -t robotics-portfolio:latest .
   ```

3. **Run Locally**
   ```bash
   docker run -p 3000:3000 robotics-portfolio:latest
   ```

4. **Push to Registry**
   ```bash
   docker tag robotics-portfolio:latest your-registry/robotics-portfolio:latest
   docker push your-registry/robotics-portfolio:latest
   ```

### Deploy to Container Services
- **AWS ECS**: Push image to ECR, deploy via ECS
- **Google Cloud Run**: `gcloud run deploy robotics-portfolio --image gcr.io/...`
- **Azure Container Instances**: Similar process
- **DigitalOcean App Platform**: Connect GitHub, auto-builds and deploys

---

## 🖥️ Self-Hosted Linux Server

### Prerequisites
- Ubuntu 20.04+ server
- Node.js 18+
- Git
- Nginx or Apache (for reverse proxy)

### Setup Steps

1. **Connect to Server**
   ```bash
   ssh root@your-server-ip
   ```

2. **Install Dependencies**
   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
   source ~/.bashrc
   nvm install 18
   npm install -g pnpm pm2
   ```

3. **Clone Repository**
   ```bash
   cd /var/www
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

4. **Install & Build**
   ```bash
   pnpm install
   pnpm build
   ```

5. **Setup PM2 (Process Manager)**
   ```bash
   pm2 start npm --name "portfolio" -- start
   pm2 save
   pm2 startup
   ```

6. **Configure Nginx**
   ```nginx
   server {
     listen 80;
     server_name your-domain.com;

     location / {
       proxy_pass http://localhost:3000;
       proxy_http_version 1.1;
       proxy_set_header Upgrade $http_upgrade;
       proxy_set_header Connection 'upgrade';
       proxy_set_header Host $host;
       proxy_cache_bypass $http_upgrade;
     }
   }
   ```

7. **Enable SSL with Let's Encrypt**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d your-domain.com
   ```

8. **Start Nginx**
   ```bash
   sudo systemctl start nginx
   sudo systemctl enable nginx
   ```

---

## 📊 Post-Deployment Checklist

After deploying, verify everything works:

- [ ] Website loads in browser
- [ ] All sections render correctly
- [ ] 3D scene displays (check browser console)
- [ ] Custom cursor appears
- [ ] Animations trigger on scroll
- [ ] Hover effects work
- [ ] Contact links are functional
- [ ] Mobile view is responsive
- [ ] Page loads in < 3 seconds
- [ ] SEO meta tags are present (check page source)

## 🔍 Performance Monitoring

### Vercel Analytics
1. Go to Vercel Dashboard
2. Select your project
3. Check "Analytics" tab for:
   - Page load times
   - Core Web Vitals (CLS, LCP, FID)
   - Traffic sources

### Google PageSpeed Insights
1. Visit https://pagespeed.web.dev
2. Enter your portfolio URL
3. Check desktop and mobile scores

### Lighthouse (Chrome DevTools)
1. Open DevTools (F12)
2. Go to "Lighthouse" tab
3. Run audit for Performance, Accessibility, SEO, Best Practices

## 🆘 Troubleshooting Deployment

### Build Fails on Vercel
- Check build logs in Vercel dashboard
- Ensure all dependencies in `package.json`
- Verify TypeScript types: `tsc --noEmit`
- Clear cache: Vercel → Settings → Git → Clear Build Cache

### 3D Scene Not Rendering on Production
- Check WebGL support: Browser console errors?
- Verify Three.js bundle size in build output
- Test on multiple browsers (Chrome, Firefox, Safari)

### Slow Page Loads
- Check image sizes: https://vercel.com/docs/concepts/image-optimization
- Profile with Lighthouse
- Consider reducing 3D model complexity

### Custom Domain Not Working
- DNS propagation takes up to 48 hours
- Verify DNS records are correct
- Test with `nslookup your-domain.com`

## 📞 Support Resources

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Deployment**: https://nextjs.org/docs/deployment
- **Netlify Docs**: https://docs.netlify.com/
- **Docker Docs**: https://docs.docker.com/

---

**Ready to Deploy?** Choose your platform above and follow the steps. Vercel is recommended for easiest setup!
