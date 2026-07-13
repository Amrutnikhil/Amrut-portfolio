# Premium Robotics Engineer Portfolio

A world-class, production-ready portfolio website for Robotics Engineers and Embedded Systems specialists. Built with Next.js 15, TypeScript, Tailwind CSS, Framer Motion, Three.js (React Three Fiber), and GSAP.

## 🚀 Features

### Visual Design
- **Futuristic Robotics Laboratory Aesthetic** - Dark theme with electric blue (#00D4FF) accents
- **Premium Color Palette** - Black (#050505), Dark Gray (#111111), Electric Blue (#00D4FF), White (#FFFFFF)
- **Glassmorphism Design** - Modern frosted glass cards with backdrop blur effects
- **Animated Grid Background** - Scan lines and animated grid patterns
- **Custom Cursor** - Futuristic cursor with trailing dots

### Interactive Elements
- **3D Hero Section** - Animated robot arm and LiDAR scan visualization using React Three Fiber
- **Scroll-Triggered Animations** - Smooth reveals and stagger animations on scroll
- **Parallax Effects** - Multi-layer depth for immersive experience
- **Hover Interactions** - Dynamic card elevations and glowing effects
- **Counter Animations** - Animated statistics counting up

### Sections

1. **Hero** - Full-screen immersive 3D scene with animated robot and LiDAR visualization
2. **About** - Personal introduction with specializations and experience highlights
3. **Projects** - Premium project cards with images, features, tech stack, and action buttons
4. **Skills** - Categorized skills with proficiency bars and radar visualization
5. **Achievements** - Timeline of milestones with animated progression
6. **Contact** - Glassmorphism contact card with multiple ways to connect

### Technical Features

- ✅ **Next.js 15** - App Router with optimized performance
- ✅ **TypeScript** - Full type safety
- ✅ **Tailwind CSS v4** - Utility-first styling with custom theme
- ✅ **Framer Motion** - Smooth component animations
- ✅ **React Three Fiber** - 3D graphics with Three.js
- ✅ **GSAP** - Advanced timeline animations
- ✅ **SEO Optimized** - Proper meta tags, Open Graph, keywords targeting robotics engineers
- ✅ **Responsive Design** - Mobile-first, works on all devices
- ✅ **Performance** - Optimized 3D rendering, lazy loading, code splitting
- ✅ **Vercel Ready** - Optimized for Vercel deployment

## 🛠️ Tech Stack

```
Frontend Framework: Next.js 16.2.6
Language: TypeScript 5.7.3
Styling: Tailwind CSS 4.2.0
Animations: Framer Motion 12.42.2 + GSAP 3.15.0
3D Graphics: React Three Fiber 9.6.1 + Three.js 0.185.1
Package Manager: pnpm 10.34.3
```

## 📦 Installation

### Prerequisites
- Node.js 18+ or higher
- pnpm (or npm/yarn)

### Setup Steps

1. **Clone or download the project**
   ```bash
   git clone <your-repo-url>
   cd robotics-portfolio
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 🎨 Customization

### Update Personal Information

Edit `/app/page.tsx` and the individual section components to update:
- Name and titles
- Bio and description
- Project details
- Skills and technologies
- Contact information

### Key Files to Customize

1. **Components/sections/hero.tsx** - Hero section, heading, subheading, stats
2. **Components/sections/about.tsx** - Bio, specializations, experience
3. **Components/sections/projects.tsx** - Project cards, descriptions, links
4. **Components/sections/skills.tsx** - Skill categories and proficiencies
5. **Components/sections/contact.tsx** - Contact information and links

### Modify Colors

Edit `/app/globals.css` to change the color scheme:

```css
:root {
  --background: #050505;
  --foreground: #FFFFFF;
  --primary: #00D4FF;
  --primary-foreground: #050505;
  /* ... other colors ... */
}
```

### Update Meta Information

Edit `/app/layout.tsx` for SEO and metadata:
- Title
- Description
- Keywords
- OpenGraph tags
- Twitter card tags

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Custom Domain** (Optional)
   - In Vercel dashboard, go to Settings → Domains
   - Add your custom domain
   - Follow DNS configuration instructions

### Deploy to Other Platforms

The project can be deployed to any platform supporting Next.js:
- **Netlify** - Requires `@netlify/plugin-nextjs`
- **AWS Amplify** - Supports Next.js directly
- **Docker** - Create a Dockerfile for containerization
- **Self-hosted** - Use `pnpm build && pnpm start`

## 📱 Project Structure

```
├── app/
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Main page (portfolio)
│   └── globals.css          # Global styles and design tokens
├── components/
│   ├── background/
│   │   ├── animated-grid.tsx    # Animated grid background
│   │   └── custom-cursor.tsx    # Futuristic cursor
│   ├── sections/
│   │   ├── hero.tsx             # Hero with 3D scene
│   │   ├── about.tsx            # About section
│   │   ├── projects.tsx         # Projects showcase
│   │   ├── skills.tsx           # Skills with radar
│   │   ├── achievements.tsx     # Timeline
│   │   └── contact.tsx          # Contact section
│   └── three/
│       ├── hero-scene.tsx       # 3D scene setup
│       ├── robot-arm.tsx        # Animated robot
│       └── lidar-scan.tsx       # LiDAR visualization
├── lib/
│   └── hooks.ts             # Custom React hooks
└── public/                  # Static assets
```

## 🎯 SEO & Keywords

The portfolio is optimized for:
- Robotics Engineer
- Embedded Systems Engineer
- ROS2 Developer
- Product Development Engineer
- Computer Vision Engineer
- Autonomous Systems
- Jetson Nano
- Mechanical Design

## 🔧 Advanced Customization

### Add New Projects

1. Open `/components/sections/projects.tsx`
2. Add a new object to the `projects` array:
   ```typescript
   {
     title: 'Your Project Title',
     description: 'Your project description',
     image: 'https://image-url.jpg',
     technologies: ['Tech1', 'Tech2'],
     features: ['Feature 1', 'Feature 2'],
     github: '#',
     demo: '#',
   }
   ```

### Modify 3D Scene

1. Open `/components/three/hero-scene.tsx`
2. Adjust camera position, lighting, and object placement
3. See `/components/three/robot-arm.tsx` and `/components/three/lidar-scan.tsx` for 3D geometry

### Add New Sections

1. Create new component in `/components/sections/`
2. Import and add to `/app/page.tsx`
3. Use existing animation patterns from other sections

## 📊 Performance Tips

- 3D assets load lazily with Suspense
- Images optimized with Vercel/Next.js Image component
- Animations use GPU-accelerated transforms
- Code splitting handles all dependencies
- Scroll-triggered animations only animate visible elements

## 🐛 Troubleshooting

### 3D Scene Not Rendering
- Check browser console for errors
- Ensure WebGL is enabled in browser
- Try different browser (Chrome recommended)

### Build Errors
- Run `pnpm install` to ensure dependencies are installed
- Clear `.next` folder: `rm -rf .next`
- Rebuild: `pnpm build`

### Styles Not Applied
- Check that `globals.css` is imported in layout
- Verify Tailwind CSS build included all files
- Clear browser cache (Ctrl+Shift+R)

## 📝 License

This portfolio template is open source and available for personal and commercial use.

## 🤝 Support

For issues or questions:
1. Check the troubleshooting section
2. Review Next.js documentation: https://nextjs.org
3. Check Framer Motion docs: https://www.framer.com/motion
4. Three.js docs: https://threejs.org

## 🎓 Learning Resources

- **Next.js 16**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Framer Motion**: https://www.framer.com/motion/
- **React Three Fiber**: https://docs.pmnd.rs/react-three-fiber
- **Three.js**: https://threejs.org/docs
- **GSAP**: https://gsap.com/docs
- **TypeScript**: https://www.typescriptlang.org/docs

---

**Made with ❤️ for Robotics Engineers** • Built with Next.js, Tailwind CSS, and Three.js
