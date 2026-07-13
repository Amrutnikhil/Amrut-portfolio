# Customization Guide

This guide shows you how to customize every part of the portfolio to match your information.

## Quick Customization Checklist

- [ ] Update your name and professional title
- [ ] Customize hero section text
- [ ] Update About section with your background
- [ ] Add/edit experience entries
- [ ] Update project portfolio
- [ ] Customize skills
- [ ] Update contact information
- [ ] Change accent color if desired
- [ ] Add your resume PDF
- [ ] Update metadata for SEO

## 1. Personal Information

### Hero Section
**File**: `components/hero.tsx`

```tsx
// Change this heading
<h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
  Designing Intelligent{' '}
  <span className="text-[#00D4FF]">Robotics Systems</span>
</h1>
```

### Navigation & Footer
**File**: `components/navbar.tsx` and `components/footer.tsx`

```tsx
// Update logo/brand name
<Link href="#" className="text-xl font-bold text-[#00D4FF]">
  AMRUT.DEV  {/* Change this to YOUR_NAME.DEV */}
</Link>
```

## 2. About Me Section

**File**: `components/about.tsx`

Update the paragraphs:
```tsx
<p>
  Final-year Electronics & Communication Engineering student at PES University...
  {/* Replace with your background */}
</p>
```

Update specialization cards:
```tsx
const specializations = [
  { icon: '🤖', title: 'Robotics & Automation', description: '' },
  { icon: '⚡', title: 'Embedded Systems', description: '' },
  // Add or remove cards as needed
];
```

## 3. Experience Timeline

**File**: `components/experience.tsx`

Replace the experiences array:
```tsx
const experiences = [
  {
    date: 'Jan 2026 — Present',
    title: 'Your Job Title',
    company: 'Your Company Name',
    description: [
      'Bullet point 1',
      'Bullet point 2',
      // Add more bullets
    ],
    tags: ['Skill1', 'Skill2', 'Skill3'],
  },
  // Add more experiences
];
```

## 4. Projects Portfolio

**File**: `components/projects.tsx`

Update the projects array:
```tsx
const projects = [
  {
    id: 1,
    tag: 'PROJECT CATEGORY',
    title: 'Your Project Title',
    description: 'Project description here...',
    technologies: ['Tech1', 'Tech2', 'Tech3'],
    github: 'https://github.com/your-repo',
    demo: 'https://your-demo.com',
  },
  // Add more projects (minimum 6 recommended)
];
```

**For Project Images**:
Each project card has a gradient placeholder:
```tsx
<div className="h-48 bg-gradient-to-br from-[#0a0a0a] to-[#1a1a2e]" />
```

Replace with actual image:
```tsx
<Image 
  src="/projects/project-name.jpg"
  alt="Project name"
  width={400}
  height={240}
  className="w-full h-48 object-cover"
/>
```

## 5. Skills Section

**File**: `components/skills.tsx`

Update skill bars:
```tsx
const skillBars = [
  { name: 'Your Skill 1', percentage: 90 },
  { name: 'Your Skill 2', percentage: 85 },
  // Edit percentages and names
];
```

Update skill categories:
```tsx
const skillCategories = [
  {
    category: 'Robotics & Automation',
    skills: [
      'ROS', 'LiDAR', 'SLAM', 'Sensor Fusion',
      // Replace with your actual skills
    ],
  },
  // Add more categories
];
```

## 6. Certifications & Education

**File**: `components/certifications.tsx` and `components/education.tsx`

Update certification cards:
```tsx
const certs = [
  {
    icon: '🤖',
    title: 'Your Certification Name',
    issuer: 'Issuing Organization',
    description: 'Description of what you learned...',
  },
];
```

Update education:
```tsx
const education = [
  {
    icon: '🎓',
    school: 'Your University Name',
    degree: 'Your Degree',
    year: '2022 — 2026',
  },
];
```

## 7. Contact Information

**File**: `components/contact.tsx`

Update contact details:
```tsx
const contacts = [
  {
    icon: Mail,
    label: 'Email',
    value: 'your.email@example.com',
    link: 'mailto:your.email@example.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 9876543210',
    link: 'tel:+919876543210',
  },
  {
    icon: Briefcase,
    label: 'LinkedIn',
    value: 'linkedin.com/in/yourprofile',
    link: 'https://linkedin.com/in/yourprofile',
  },
  {
    icon: GitBranch,
    label: 'GitHub',
    value: 'github.com/yourprofile',
    link: 'https://github.com/yourprofile',
  },
];
```

## 8. Color Customization

### Change Accent Color

The portfolio uses Electric Blue (#00D4FF) as the accent color.

**Option 1: Replace globally**
- File: `app/globals.css`
- Replace `#00D4FF` with your color
- Replace `#00D4FF` in all component files

**Option 2: Update Tailwind config**
```tsx
// tailwind.config.js
theme: {
  extend: {
    colors: {
      'accent': '#YOUR_COLOR',
    }
  }
}
```

### Recommended Colors
- **Tech/Modern**: #00D4FF (current), #0066FF, #FF6B6B
- **Professional**: #1E90FF, #4169E1, #6495ED
- **Creative**: #FF1493, #FF69B4, #FFB6C1

## 9. Metadata & SEO

**File**: `app/layout.tsx`

Update metadata:
```tsx
export const metadata: Metadata = {
  title: 'Your Name | Your Title',
  description: 'Your professional description...',
  keywords: [
    'Your Name',
    'Your Job Title',
    'Your Specialty',
    // Add relevant keywords
  ],
  creator: 'Your Name',
};
```

## 10. Resume/CV

**Adding Resume PDF**:

1. Create a `public` folder (if not exists)
2. Add your resume: `public/resume.pdf`
3. Links automatically work: `/resume.pdf`

The download button in Contact section links to `/resume.pdf`

## 11. Domain & Branding

### Update Site Title
- File: `app/layout.tsx`
- Change: `title: 'Amrut B Nargund | ...'`

### Update Navigation Links
- File: `components/navbar.tsx`
- Add/remove navigation items as needed

### Update Footer
- File: `components/footer.tsx`
- Change copyright year and name

## 12. Statistics Section

**File**: `components/hero.tsx`

Update stats:
```tsx
<div className="text-3xl font-bold text-[#00D4FF]">10+</div>
<div className="text-sm text-gray-400 mt-2">Technical Projects</div>
```

## 13. Section Order

To reorder sections, edit `app/page.tsx`:

```tsx
export default function Home() {
  return (
    <main className="bg-[#050505] min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Certifications />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
```

Rearrange components in any order you prefer.

## 14. Adding New Sections

To add a custom section:

1. **Create component** in `components/`:
   ```tsx
   // components/awards.tsx
   export default function Awards() {
     return (
       <section id="awards" className="bg-[#050505] section-padding section-divider">
         <div className="max-w-7xl mx-auto">
           <div className="section-label">AWARDS</div>
           <h2 className="section-heading">Your Heading</h2>
           {/* Content here */}
         </div>
       </section>
     );
   }
   ```

2. **Import in page.tsx**:
   ```tsx
   import Awards from '@/components/awards';
   ```

3. **Add to layout**:
   ```tsx
   <Awards />
   ```

## 15. Testing Changes

After making changes:

```bash
# Development (with live reload)
pnpm dev

# Production build test
pnpm build
pnpm start
```

Visit `http://localhost:3000` to preview.

## Best Practices

1. **Keep it honest** - Don't exaggerate skills or experience
2. **Use specific details** - "Built autonomous robot with ROS2" beats "Worked on robotics"
3. **Show impact** - "Increased efficiency by 40%" beats "Optimized systems"
4. **Keep it updated** - Refresh projects and experience quarterly
5. **Mobile first** - Test on phones and tablets frequently
6. **Keep backups** - Commit changes to Git regularly

## Common Issues

### Changes not showing
1. Stop dev server (Ctrl+C)
2. Run `pnpm dev` again
3. Clear browser cache (Cmd+Shift+Delete)

### Broken links
- Make sure URLs are correct
- Test all links before deploying
- Use relative paths for internal links

### Styling issues
1. Check Tailwind class names (typos?)
2. Verify globals.css is imported
3. Restart dev server

## Need Help?

- Check component source code - it's well-commented
- Review similar projects online
- Test incrementally - change one thing at a time
- Deploy frequently - catch issues early
