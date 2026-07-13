# Quick Start Guide

Get your Robotics Engineer portfolio up and running in minutes!

## ⚡ 5-Minute Setup

### 1. Install Dependencies (2 min)
```bash
pnpm install
```

### 2. Start Dev Server (1 min)
```bash
pnpm dev
```

### 3. Open in Browser (1 min)
```
http://localhost:3000
```

### 4. Customize Your Info (1 min)

Edit these key files:

**Hero Section** → `components/sections/hero.tsx`
```typescript
// Change heading and subheading
"Designing Intelligent Robotics Systems"
```

**About Section** → `components/sections/about.tsx`
```typescript
// Update bio and specializations
```

**Projects** → `components/sections/projects.tsx`
```typescript
// Add your projects with images, descriptions, and links
```

**Skills** → `components/sections/skills.tsx`
```typescript
// List your technologies and expertise areas
```

**Contact** → `components/sections/contact.tsx`
```typescript
// Update email, LinkedIn, GitHub URLs
```

---

## 📝 Customization Checklist

- [ ] Update name and introduction (About section)
- [ ] Add your project details and images
- [ ] Update technology skills
- [ ] Add your contact information (email, LinkedIn, GitHub)
- [ ] Change resume link
- [ ] Update meta description in `app/layout.tsx`
- [ ] Add your domain or use Vercel's default

---

## 🚀 Deploy in 2 Clicks

### Option A: Vercel (Easiest - Recommended)

1. Push your code to GitHub
2. Go to https://vercel.com/new
3. Select your repository
4. Click "Deploy" ✅

Your portfolio is live at `https://yourproject.vercel.app`

### Option B: Netlify

1. Push your code to GitHub
2. Go to https://netlify.com
3. Click "New site from Git"
4. Select GitHub and your repository
5. Click "Deploy" ✅

### Option C: Local Deployment (Development)

```bash
# Build
pnpm build

# Start production server
pnpm start
```

---

## 🎨 Theme Customization (Optional)

### Change Color Scheme

Edit `/app/globals.css`:

```css
:root {
  --background: #050505;        /* Main background */
  --foreground: #FFFFFF;        /* Main text */
  --primary: #00D4FF;           /* Electric blue - main accent */
  --accent: #00D4FF;            /* Accent color */
}
```

Popular alternatives:
- **Cyan**: `#00D4FF` (default)
- **Purple**: `#9D4EDD`
- **Green**: `#00F5B8`
- **Red**: `#FF006E`

---

## 📂 Project Structure

```
robotics-portfolio/
├── app/
│   ├── page.tsx                # Main portfolio page
│   ├── layout.tsx              # Metadata & HTML structure
│   └── globals.css             # Global styles & colors
├── components/
│   ├── sections/               # Page sections
│   │   ├── hero.tsx           # Hero with 3D
│   │   ├── about.tsx          # About you
│   │   ├── projects.tsx       # Your projects
│   │   ├── skills.tsx         # Your skills
│   │   ├── achievements.tsx   # Timeline
│   │   └── contact.tsx        # Contact form
│   └── three/                 # 3D graphics
└── public/                    # Static files
```

---

## 🔍 Key Features to Explore

### 3D Robot Animation (Hero)
The hero section features a rotating 3D robot arm. Customize in:
- `/components/three/robot-arm.tsx` - Robot geometry
- `/components/three/lidar-scan.tsx` - LiDAR visualization

### Scroll Animations
All sections animate on scroll. See `useScrollAnimation` hook in `/lib/hooks.ts`

### Custom Cursor
The electric blue cursor appears when hovering. Edit in:
- `/components/background/custom-cursor.tsx`

### Animated Grid
Background grid with scan lines. Found in:
- `/components/background/animated-grid.tsx`

---

## 🐛 Troubleshooting

### "Module not found" error
```bash
pnpm install
rm -rf .next
pnpm dev
```

### Port 3000 already in use
```bash
pnpm dev -p 3001
# or on macOS/Linux:
lsof -i :3000
kill -9 <PID>
```

### 3D scene not showing
- Check browser console (F12)
- Ensure WebGL is supported
- Try a different browser (Chrome recommended)
- Hard refresh: `Ctrl+Shift+R` or `Cmd+Shift+R`

### Slow build times
```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

---

## 📊 Performance Tips

1. **Image Optimization**: Use high-quality project images (1024x768px recommended)
2. **Keep Skills Updated**: Edit `components/sections/skills.tsx` regularly
3. **Project Links**: Make sure GitHub and demo links work
4. **Mobile Testing**: Test on phone with Chrome DevTools (F12 → device toggle)
5. **Loading Performance**: Portfolio loads in <2 seconds

---

## 🎓 Next Steps

1. **Deploy** - Choose Vercel, Netlify, or self-hosting
2. **Add Custom Domain** - Use your own domain
3. **SEO** - Update keywords in `app/layout.tsx`
4. **Share** - Post portfolio link on LinkedIn, GitHub, email
5. **Update Regularly** - Add new projects and achievements

---

## 💡 Pro Tips

- Use **Unsplash** or **Pexels** for high-quality project images (free)
- Keep project descriptions **concise and impactful**
- Use **action verbs**: "Designed", "Developed", "Implemented"
- Include **measurable results**: "Improved performance by 50%"
- Link to **GitHub** for code and **demos** for live projects
- Update portfolio **every 3-6 months** with new work

---

## 📞 Getting Help

- **README.md** - Detailed feature documentation
- **DEPLOYMENT.md** - Advanced deployment guides
- **Next.js Docs** - https://nextjs.org/docs
- **Framer Motion** - https://www.framer.com/motion
- **Three.js** - https://threejs.org/docs

---

## ✨ You're All Set!

Your portfolio is ready. Time to make it yours:

1. Customize content
2. Add your projects
3. Deploy
4. Share with recruiters!

**Good luck with your Robotics Engineer career!** 🚀
