# RecruiterAI Landing Page

A production-ready, high-conversion SaaS landing page for an AI recruiting platform. Built with Next.js 14, TypeScript, and Tailwind CSS.

## 🎯 Project Overview

RecruiterAI is a modern landing page designed to convert founders, hiring managers, and HR leaders into trial users and demo requests. The page demonstrates how AI-powered workflows can transform the hiring process.

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Architecture:** Server Components
- **Deployment:** Vercel-ready

## ✨ Features

- **Mobile-First Responsive Design** - Optimized for all screen sizes
- **Component-Based Architecture** - Reusable, maintainable UI components
- **Performance Optimized** - Fast page loads with minimal JavaScript
- **SEO Ready** - Proper metadata and semantic HTML
- **Production Quality** - Clean code following industry best practices

## 📂 Project Structure

```
recruiterai-landing-page/
├── app/
│   ├── layout.tsx          # Root layout with metadata & navigation
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles & Tailwind
├── components/
│   ├── sections/           # Landing page sections
│   │   ├── Hero.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Impact.tsx
│   │   ├── Distribution.tsx
│   │   ├── Testimonials.tsx
│   │   ├── FAQ.tsx
│   │   └── FinalCTA.tsx
│   └── ui/                 # Reusable UI components
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── MetricCard.tsx
│       └── AccordionItem.tsx
├── tailwind.config.js      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies
```

## 🎨 Design System

### Color Palette
- **Primary Blue:** #3B82F6
- **Accent Blue:** #A5D8FF
- **Accent Purple Light:** #D0BCFF
- **Accent Purple:** #B197FC
- **Light Background:** #EFF6FF
- **Light Gray:** #F3F4F6
- **Dark Background:** #000000

### Components
- Reusable Button component with multiple variants
- Metric cards for displaying impact statistics
- Accordion component for FAQ section
- Card component for content grouping

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📦 Deployment to Vercel

### Method 1: Vercel CLI (Recommended)

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Follow the prompts:**
   - Set up and deploy: Yes
   - Which scope: Select your account
   - Link to existing project: No
   - Project name: recruiterai-landing-page
   - Directory: ./
   - Override settings: No

4. **Production deployment:**
   ```bash
   vercel --prod
   ```

### Method 2: GitHub Integration

1. **Push code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Configure project:
     - Framework Preset: Next.js
     - Root Directory: ./
     - Build Command: `npm run build`
     - Output Directory: `.next`
   - Click "Deploy"

3. **Automatic deployments:**
   - Every push to main triggers a production deployment
   - Pull requests create preview deployments

### Environment Variables (Optional)

If you add analytics or forms later:

```env
# Vercel Dashboard → Settings → Environment Variables
NEXT_PUBLIC_ANALYTICS_ID=your_id_here
```

## 🎯 Landing Page Sections

1. **Hero** - Main value proposition with CTAs and pain point cards
2. **How It Works** - Three AI workflow visualizations
3. **Impact & Results** - Quantifiable metrics and benefits
4. **Distribution** - Auto-scrolling platform integration showcase
5. **Testimonials** - Social proof from realistic customer stories
6. **FAQ** - Common questions with accordion UI
7. **Final CTA** - Conversion-focused dark section

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## ⚡ Performance Optimizations

- Server-side rendering for initial page load
- Minimal client-side JavaScript
- Optimized images and animations
- Efficient Tailwind CSS purging

## 🔧 Customization

### Updating Content
- Edit section components in `components/sections/`
- Modify copy, metrics, and testimonials directly in components
- No backend required - all data is structured within components

### Styling
- Update color palette in `tailwind.config.js`
- Modify component styles in respective `.tsx` files
- Global styles in `app/globals.css`

### Adding Integrations
- Forms: Add form handling to CTA buttons
- Analytics: Add scripts to `app/layout.tsx`
- CRM: Connect button clicks to your CRM API

## 📄 License

This project is created as part of the OneSol AI Labs Founder Intern assessment.

## 🤝 Support

For questions or issues:
- Review component documentation in code comments
- Check Next.js documentation: [nextjs.org/docs](https://nextjs.org/docs)
- Tailwind CSS docs: [tailwindcss.com/docs](https://tailwindcss.com/docs)

---

**Built with ❤️ for OneSol AI Labs Founder Intern Assessment**
