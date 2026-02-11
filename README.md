# Minimalist Portfolio with GSAP Animations

A beautiful, faceless portfolio website built with Next.js 15, TypeScript, Tailwind CSS, and GSAP animations.

## 🎨 Design Features

- **Minimalist & Cute Aesthetic**: Warm color palette with cream, peach, coral, and sage tones
- **GSAP Animations**: 
  - Smooth scroll-triggered animations
  - Text reveal effects with character-by-character animation
  - Project card hover interactions with mouse-tracking glow
  - Parallax scrolling effects
  - Staggered element animations
- **Custom Elements**:
  - Animated custom cursor
  - Floating background blobs
  - Subtle grain texture overlay
  - Glassmorphism effects

## 🚀 Getting Started

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Customization Guide

### 1. Update Your Projects

Edit `/components/Projects.tsx` and replace the `projects` array with your actual projects:

```typescript
const projects: Project[] = [
  {
    title: 'Your Project Name',
    description: 'Project description goes here...',
    tech: ['React', 'Next.js', 'TypeScript'],
    link: 'https://your-project-link.com',
    gradient: 'from-coral to-peach', // Choose: from-coral to-peach, from-sage to-forest, from-peach to-sage
  },
  // Add 2 more projects...
]
```

### 2. Update Contact Information

Edit `/components/Contact.tsx` and update the `contactLinks` array:

```typescript
const contactLinks = [
  { name: 'Email', value: 'your@email.com', href: 'mailto:your@email.com' },
  { name: 'GitHub', value: 'github.com/yourusername', href: 'https://github.com/yourusername' },
  { name: 'LinkedIn', value: 'linkedin.com/in/you', href: 'https://linkedin.com/in/you' },
  { name: 'Twitter', value: '@yourusername', href: 'https://twitter.com/yourusername' },
]
```

### 3. Customize Text Content

- **Hero Section** (`/components/Hero.tsx`): 
  - Change the main title and subtitle
  - Update button text and links

- **About Section** (`/components/About.tsx`):
  - Write your own bio
  - Update the skills array with your technologies

### 4. Color Customization

Edit `/tailwind.config.js` to change colors:

```javascript
colors: {
  cream: '#FAF7F0',    // Background
  peach: '#FFD3B5',    // Accent light
  coral: '#FFAA85',    // Primary accent
  sage: '#9DB5A4',     // Secondary accent
  forest: '#5D7A6C',   // Text secondary
  charcoal: '#2A2A2A', // Text primary
}
```

### 5. Font Customization

Current fonts:
- Display: DM Serif Display (headings)
- Body: Karla (paragraphs)

To change fonts, update the Google Fonts import in `/app/globals.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Your+Display+Font&family=Your+Body+Font&display=swap');
```

Then update CSS variables:
```css
:root {
  --font-display: 'Your Display Font', serif;
  --font-body: 'Your Body Font', sans-serif;
}
```

## 🎯 GSAP Animation Tips

### Understanding the Animations

1. **Character-by-Character Text Reveal** (Hero):
   - Splits text into individual characters
   - Animates each with a stagger effect
   - Uses `back.out` easing for a bouncy effect

2. **Scroll-Triggered Animations**:
   - Triggered when elements enter viewport
   - Uses `ScrollTrigger.start: 'top 80%'` for early triggering
   - `toggleActions: 'play none none reverse'` for scroll-up animations

3. **Mouse-Tracking Glow** (Project Cards):
   - Tracks mouse position relative to card
   - Creates radial gradient that follows cursor
   - Uses CSS custom properties updated via GSAP

### Customizing Animations

To adjust animation timing in any component:

```typescript
gsap.from(element, {
  opacity: 0,
  y: 50,
  duration: 1,        // Change animation duration
  delay: 0.3,         // Add delay before starting
  stagger: 0.1,       // Delay between multiple elements
  ease: 'power2.out', // Easing function
})
```

Common easing options:
- `power2.out` - Smooth deceleration
- `back.out(1.5)` - Bouncy overshoot
- `elastic.out(1, 0.3)` - Springy effect
- `sine.inOut` - Gentle acceleration/deceleration

## 📦 Project Structure

```
portfolio/
├── app/
│   ├── globals.css      # Global styles & GSAP helpers
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Main page with sections
├── components/
│   ├── Hero.tsx         # Hero section with text reveal
│   ├── About.tsx        # About section with skills
│   ├── Projects.tsx     # Project cards with hover effects
│   ├── Contact.tsx      # Contact links
│   └── CustomCursor.tsx # Animated cursor
├── public/              # Static assets (add your images here)
└── package.json
```

## 🌟 Adding Your Own Images

1. Add images to `/public/` folder
2. Reference them in components:
```typescript
<img src="/your-image.png" alt="Description" />
```

For project thumbnails, update the Project interface to include an image property.

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Deploy with one click

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Design Credits

- Color palette: Warm minimalist theme
- Fonts: DM Serif Display & Karla from Google Fonts
- Animations: GSAP 3

## 📄 License

Feel free to use this template for your own portfolio!

---

**Happy coding!** 🚀

If you need help customizing anything, the GSAP documentation is excellent: https://gsap.com/docs/
