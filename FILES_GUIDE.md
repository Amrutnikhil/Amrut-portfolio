# Complete Files Guide

A comprehensive reference for every file in your portfolio project.

## 📚 Documentation Files

### README.md
- **Purpose**: Main project documentation
- **Contains**: Features overview, tech stack, installation, customization, deployment overview
- **When to Read**: First-time setup, feature reference

### QUICKSTART.md
- **Purpose**: Get up and running in 5 minutes
- **Contains**: Quick setup, customization checklist, troubleshooting
- **When to Read**: Quick reference for immediate changes

### DEPLOYMENT.md
- **Purpose**: Detailed deployment guides
- **Contains**: Vercel, Netlify, Docker, self-hosted, troubleshooting
- **When to Read**: Before deploying to production

### PROJECT_SUMMARY.md
- **Purpose**: Complete project overview
- **Contains**: What's included, structure, features, design system, metrics
- **When to Read**: Understanding project scope and capabilities

### FILES_GUIDE.md
- **Purpose**: This file - reference for all files
- **Contains**: Every file with purpose and modification details
- **When to Read**: Finding what needs to be edited

---

## 🎨 Application Files

### app/layout.tsx
- **Purpose**: Root layout component and metadata
- **Customize**: 
  - `title`: Portfolio title
  - `description`: SEO description
  - `keywords`: Search keywords
  - `twitter`, `openGraph`: Social media meta
- **Modify For**: Changing page metadata, adding fonts
- **Related**: globals.css, page.tsx

### app/page.tsx
- **Purpose**: Main portfolio page
- **Contains**: Page structure importing all sections
- **Customize**: Add/remove sections, change order
- **Modify For**: Adding new sections, removing sections
- **Related**: All components in `/components/sections/`

### app/globals.css
- **Purpose**: Global styles and design tokens
- **Contains**: 
  - CSS variables (colors, spacing)
  - Keyframe animations
  - Utility classes
- **Customize**:
  - Colors: Change `--background`, `--primary`, etc.
  - Animations: Modify keyframes
  - Utilities: Add new classes
- **Modify For**: Theme changes, animation tweaks
- **Key Variables**:
  ```css
  --background: #050505
  --foreground: #FFFFFF
  --primary: #00D4FF (electric blue)
  --electric-blue: #00D4FF
  ```

---

## 🧩 Component Files

### components/sections/hero.tsx
- **Purpose**: Hero section with 3D animation
- **Contains**: 
  - Full-screen layout
  - 3D canvas (HeroScene)
  - Heading and subheading
  - Statistics with counters
  - CTA buttons
- **Customize**:
  - Heading: Line 63-66
  - Subheading: Line 70
  - Stats: Line 72-85
  - Button text/links: Line 88-102
- **Modify For**: Changing hero text, button destinations

### components/sections/about.tsx
- **Purpose**: About me section
- **Contains**:
  - Introduction text
  - Specializations grid
  - Experience timeline
  - Stats cards
- **Customize**:
  - Title: Change "About Me"
  - Bio: Update introduction text (lines 100-115)
  - Specializations: Line 125 array
  - Experience: Lines 130-160
- **Modify For**: Personal information, skills, experience

### components/sections/projects.tsx
- **Purpose**: Featured projects showcase
- **Contains**: 4 project cards with images, features, tech stack
- **Customize**:
  - Projects array: Line 38-81
  - Each project needs:
    - `title`: Project name
    - `description`: What it does
    - `image`: URL or path to image
    - `technologies`: Array of tech
    - `features`: Key features
    - `github`: GitHub link
    - `demo`: Demo link
- **Modify For**: Adding/removing projects, updating details

### components/sections/skills.tsx
- **Purpose**: Technical skills display
- **Contains**: 6 skill categories with radar visualization
- **Customize**:
  - skillCategories array: Line 31-69
  - Each category has:
    - `title`: Category name
    - `skills`: Array of technologies
    - `color`: RGB color for progress bar
- **Modify For**: Adding/removing skills, changing categories

### components/sections/achievements.tsx
- **Purpose**: Timeline of achievements
- **Contains**: Milestone timeline with status badges
- **Customize**:
  - achievements array: Line 28-87
  - Each achievement has:
    - `year`: Year completed
    - `title`: Achievement name
    - `description`: Details
    - `icon`: Emoji icon
    - `status`: "Completed" or "In Progress"
- **Modify For**: Adding milestones, updating timeline

### components/sections/contact.tsx
- **Purpose**: Contact section
- **Contains**: Contact methods, glassmorphism card, links
- **Customize**:
  - Email: Line 31, 145
  - LinkedIn: Line 39, 160
  - GitHub: Line 47, 168
  - Resume link: Line 120
  - Social links: Line 155-175
- **Modify For**: Contact information, resume link

### components/background/animated-grid.tsx
- **Purpose**: Background grid pattern with scan lines
- **Contains**: SVG grid, animated scan line
- **Customize**: Grid pattern density, colors, opacity
- **Modify For**: Changing background appearance

### components/background/custom-cursor.tsx
- **Purpose**: Futuristic animated cursor
- **Contains**: Main cursor dot, trailing effect
- **Customize**: 
  - Colors: Line 51 (border), Line 68 (background)
  - Size: Line 49 (`w-5 h-5`)
  - Trail: Line 64 (`w-2 h-2`)
- **Modify For**: Cursor appearance, size, colors

### components/three/hero-scene.tsx
- **Purpose**: 3D scene setup
- **Contains**: Canvas, camera, lights, 3D objects
- **Customize**: Camera position, object placement, lighting
- **Modify For**: Changing 3D visualization

### components/three/robot-arm.tsx
- **Purpose**: Animated 3D robot arm
- **Contains**: Geometry for robot parts, materials, animations
- **Customize**: Size, colors, rotation speeds
- **Modify For**: Robot appearance, animation speed

### components/three/lidar-scan.tsx
- **Purpose**: LiDAR point cloud visualization
- **Contains**: Point geometry, concentric circles, central core
- **Customize**: Point density, circle colors, rotation
- **Modify For**: Scan appearance, animation

---

## 🔧 Configuration Files

### package.json
- **Purpose**: Project dependencies and scripts
- **Contains**: npm packages, build scripts
- **Customize**: 
  - `name`: Project name
  - `scripts`: Add npm commands
- **Scripts**:
  - `pnpm dev`: Start dev server
  - `pnpm build`: Production build
  - `pnpm start`: Run production
  - `pnpm lint`: Run linter

### tsconfig.json
- **Purpose**: TypeScript configuration
- **Default Settings**: Strict mode, latest targets
- **Modify For**: TypeScript rules (rarely needed)

### tailwind.config.js
- **Purpose**: Tailwind CSS configuration
- **Contains**: Theme extensions, plugins
- **Customize**: Custom colors, spacing, plugins
- **Default**: Uses Tailwind v4 with @theme

### next.config.mjs
- **Purpose**: Next.js configuration
- **Contains**: Build optimization, experimental features
- **Modify For**: Custom build settings

### postcss.config.mjs
- **Purpose**: PostCSS configuration
- **Contains**: Tailwind CSS processor settings
- **Default**: Configured for Tailwind v4

---

## 📦 Library Files

### lib/hooks.ts
- **Purpose**: Custom React hooks
- **Contains**:
  - `useMousePosition`: Track mouse position
  - `useScrollAnimation`: Detect scroll position
  - `useParallax`: Parallax scroll effect
  - `useCountUp`: Animate numbers counting up
- **Use In**: Components for animations and effects

---

## 📁 Directory Structure Summary

```
app/                           # Next.js App Router
├── layout.tsx                # Root layout + metadata
├── page.tsx                  # Main page
└── globals.css               # Global styles

components/
├── background/               # Background effects
│   ├── animated-grid.tsx    # Grid background
│   └── custom-cursor.tsx    # Cursor effect
├── sections/                 # Page sections
│   ├── hero.tsx             # Hero section
│   ├── about.tsx            # About section
│   ├── projects.tsx         # Projects section
│   ├── skills.tsx           # Skills section
│   ├── achievements.tsx     # Achievements section
│   └── contact.tsx          # Contact section
└── three/                    # 3D components
    ├── hero-scene.tsx       # 3D scene
    ├── robot-arm.tsx        # Robot 3D model
    └── lidar-scan.tsx       # LiDAR visualization

lib/
└── hooks.ts                 # Custom hooks

public/                       # Static assets

Configuration Files:
├── package.json             # Dependencies
├── tsconfig.json            # TypeScript config
├── tailwind.config.js       # Tailwind config
├── next.config.mjs          # Next.js config
└── postcss.config.mjs       # PostCSS config

Documentation:
├── README.md                # Main documentation
├── QUICKSTART.md            # Quick start guide
├── DEPLOYMENT.md            # Deployment guide
├── PROJECT_SUMMARY.md       # Project overview
└── FILES_GUIDE.md           # This file
```

---

## 🛠️ Modification Workflow

### Update Hero Text
1. Edit: `components/sections/hero.tsx`
2. Change lines: 63-66 (heading), 70 (subheading)

### Add New Project
1. Edit: `components/sections/projects.tsx`
2. Add object to `projects` array (line ~38)
3. Include: title, description, image, technologies, features, links

### Change Colors
1. Edit: `app/globals.css`
2. Modify CSS variables in `:root` (lines ~60-91)
3. Apply automatically to entire site

### Update Skills
1. Edit: `components/sections/skills.tsx`
2. Modify `skillCategories` array (line ~31)
3. Update technologies for each category

### Add Timeline Item
1. Edit: `components/sections/achievements.tsx`
2. Add to `achievements` array (line ~28)
3. Include: year, title, description, icon, status

### Change Contact Info
1. Edit: `components/sections/contact.tsx`
2. Update email, LinkedIn, GitHub links (multiple locations)
3. Change resume download link

---

## 🚀 Common Tasks

### Deploy to Vercel
- See DEPLOYMENT.md → Vercel section
- Push to GitHub
- Connect in Vercel dashboard
- Done!

### Customize Theme
1. Edit `app/globals.css`
2. Update `--background`, `--primary`, `--foreground`
3. All components use these variables

### Add New Section
1. Create new file: `components/sections/new-section.tsx`
2. Follow existing section patterns
3. Import in `app/page.tsx`
4. Add to page layout

### Update Resume Link
1. Edit `components/sections/contact.tsx` (line ~120)
2. Change href to your resume URL
3. Update text if needed

---

## 📝 File Checklist for Customization

- [ ] Update name/title in `app/layout.tsx`
- [ ] Change hero heading in `components/sections/hero.tsx`
- [ ] Update about text in `components/sections/about.tsx`
- [ ] Add projects in `components/sections/projects.tsx`
- [ ] Update skills in `components/sections/skills.tsx`
- [ ] Add achievements in `components/sections/achievements.tsx`
- [ ] Update contact info in `components/sections/contact.tsx`
- [ ] Change colors in `app/globals.css` (optional)
- [ ] Update resume link in `components/sections/contact.tsx`

---

## 🎓 References

For each technology, here are key files to understand:

**Next.js**: `app/layout.tsx`, `app/page.tsx`, `next.config.mjs`

**Tailwind CSS**: `app/globals.css`, `tailwind.config.js`

**Framer Motion**: All `components/sections/*.tsx` files (motion components)

**React Three Fiber**: `components/three/*.tsx` files

**TypeScript**: `tsconfig.json`, all `*.tsx` and `*.ts` files

**Custom Hooks**: `lib/hooks.ts`

---

**Need help?** Refer to:
1. README.md for complete documentation
2. QUICKSTART.md for immediate changes
3. This file to find specific files to edit
4. DEPLOYMENT.md when ready to deploy

Good luck! 🚀
