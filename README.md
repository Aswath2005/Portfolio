# Designer Portfolio Website

A modern, professional portfolio website built with Next.js 14, React, TypeScript, and Framer Motion. Features a sleek dark/light mode toggle, custom animated cursor, loading screen, and smooth scroll animations.

## Features

✨ **Modern Design**
- Clean, bold layout with professional aesthetic
- Dark mode (default) and light mode themes
- Smooth glassmorphism effects
- Responsive mobile-first design

🎨 **Interactive Elements**
- Custom animated cursor with hover effects
- Smooth scroll animations on section reveal
- Animated loading screen with progress bar
- Hover effects on cards and buttons
- Keyboard-accessible navigation

🔧 **Technical Features**
- Next.js 14 with App Router
- TypeScript for type safety
- Tailwind CSS for styling
- Framer Motion for animations
- Optimized images with next/image
- SEO-friendly structure
- Dark/light mode persistence in localStorage

📱 **Responsive**
- Mobile-first approach
- Mobile hamburger menu with staggered animations
- Tablet and desktop optimized layouts
- Touch-friendly interactive elements

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Syne, DM Sans)

## Getting Started

### Prerequisites

- Node.js 16.x or higher
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd portfolio
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Run the development server**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page with all sections
│   └── globals.css         # Global styles and animations
├── components/
│   ├── Navbar.tsx          # Fixed navigation bar
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About section with skills
│   ├── Projects.tsx        # Projects grid with filtering
│   ├── Experience.tsx      # Experience timeline
│   ├── Testimonials.tsx    # Client testimonials carousel
│   ├── Contact.tsx         # Contact form and info
│   ├── Footer.tsx          # Footer section
│   ├── LoadingScreen.tsx   # Loading screen animation
│   └── CustomCursor.tsx    # Custom cursor component
├── hooks/
│   ├── useDarkMode.ts      # Dark mode toggle hook
│   └── useActiveSection.ts # Active section detection
├── utils/
│   └── cn.ts               # Class name utility
├── tailwind.config.ts      # Tailwind CSS config
├── tsconfig.json           # TypeScript config
├── next.config.js          # Next.js config
├── postcss.config.js       # PostCSS config
├── package.json            # Dependencies
└── .gitignore              # Git ignore file
```

## Sections

### 1. Hero Section
- Availability badge with pulsing indicator
- Large heading with subtitle
- CTA buttons for navigation
- Social media icons
- Profile image with geometric frame and floating badge

### 2. About Section
- Bio paragraph
- Animated stat counters
- Skill cards with progress bars
- Responsive 2-column layout

### 3. Projects Section
- Filter tabs for different categories
- Responsive 2-column grid
- Hover overlay with project details
- Project category badges
- Tags for technologies used

### 4. Experience Section
- Vertical timeline layout
- Alternating left/right cards on desktop
- Single column on mobile
- Yellow timeline dots
- Role, company, and date information

### 5. Testimonials Section
- Carousel with arrow navigation
- Star ratings
- Client photos and details
- Dot indicators for current position
- Auto-sliding support

### 6. Contact Section
- Contact information cards
- Contact form with validation
- Social media links
- Responsive layout

## Customization

### Colors
Edit the color variables in `tailwind.config.ts` and `app/globals.css`:
- Update the accent color: `--accent-yellow` → your color
- Update background: `--dark-bg` → your background
- Update text colors for light/dark modes

### Fonts
Google Fonts are imported in `app/globals.css`. Change fonts:
1. Update the import URL
2. Update font family in `tailwind.config.ts`

### Content
Replace placeholder content in each component:
- Hero section: Update name, title, bio
- About section: Update bio and skills
- Projects: Add your actual projects
- Experience: Update your work history
- Testimonials: Add real client feedback
- Contact: Update contact information

### Images
Replace Unsplash placeholder images with your own:
1. Upload images to your preferred hosting
2. Update image URLs in components
3. Ensure images are optimized for web

## Dark/Light Mode

- Default theme is dark mode
- Toggle button in navbar (sun/moon icon)
- Theme preference saved in localStorage
- Smooth transition between modes

## Custom Cursor

- Desktop only feature
- Hidden on touch devices
- Animated ring that follows mouse
- Expands on link/button hover
- Customizable in `components/CustomCursor.tsx`

## Performance

- Image optimization with next/image
- Framer Motion animations are GPU-accelerated
- Lazy loading for sections
- Optimized bundle with tree-shaking

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: Modern versions

## Deployment

### Vercel (Recommended)
```bash
npm run build
vercel
```

### Other Platforms
```bash
npm run build
npm start
```

## SEO

The site includes:
- Semantic HTML structure
- Meta tags in layout.tsx
- Open Graph support ready
- Mobile-friendly design
- Fast Core Web Vitals

## License

This project is open source and available under the MIT License.

## Support

For questions or issues, feel free to reach out or open an issue in the repository.

---

**Built with ❤️ using Next.js and Framer Motion**
