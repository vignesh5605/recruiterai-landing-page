/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
         SEMANTIC COLOR TOKENS
         Purpose: Enterprise-grade color system with semantic naming
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
      colors: {
        // Primary Brand
        primary: {
          DEFAULT: '#3B82F6',
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
        },
        // Accent Colors
        accent: {
          blue: '#A5D8FF',
          purple: '#B197FC',
          'purple-light': '#D0BCFF',
        },
        // Semantic Surface Colors
        surface: {
          primary: '#FFFFFF',
          secondary: '#F9FAFB',
          tertiary: '#F3F4F6',
          elevated: '#FFFFFF',
        },
        // Semantic Text Colors
        text: {
          primary: '#111827',
          secondary: '#4B5563',
          tertiary: '#6B7280',
          muted: '#9CA3AF',
          inverse: '#FFFFFF',
        },
        // Semantic Border Colors
        border: {
          DEFAULT: '#E5E7EB',
          subtle: '#F3F4F6',
          strong: '#D1D5DB',
        },
        // Dark Mode Tokens
        dark: {
          bg: '#000000',
          'bg-secondary': '#404040',
          text: '#FFFFFF',
          'text-secondary': '#737373',
        },
        // Semantic State Colors
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444',
      },

      /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
         SPACING TOKENS - 8-Point Grid System
         Purpose: Consistent vertical rhythm and visual harmony
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
      spacing: {
        '4.5': '1.125rem',  // 18px
        '13': '3.25rem',    // 52px
        '15': '3.75rem',    // 60px
        '18': '4.5rem',     // 72px
        '22': '5.5rem',     // 88px
        '26': '6.5rem',     // 104px
        '30': '7.5rem',     // 120px
        '34': '8.5rem',     // 136px
        '38': '9.5rem',     // 152px
      },

      /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
         TYPOGRAPHY TOKENS
         Purpose: Professional SaaS type scale with consistent rhythm
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
      fontSize: {
        // Display sizes (for heroes)
        'display-2xl': ['4.5rem', { lineHeight: '1.08', letterSpacing: '-0.02em', fontWeight: '600' }],
        'display-xl': ['3.75rem', { lineHeight: '1.08', letterSpacing: '-0.02em', fontWeight: '600' }],
        'display-lg': ['3rem', { lineHeight: '1.12', letterSpacing: '-0.015em', fontWeight: '600' }],
        'display-md': ['2.25rem', { lineHeight: '1.15', letterSpacing: '-0.015em', fontWeight: '600' }],
        'display-sm': ['1.875rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '600' }],
        // Body sizes
        'body-xl': ['1.25rem', { lineHeight: '1.6', letterSpacing: '-0.01em' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6', letterSpacing: '-0.01em' }],
        'body-md': ['1rem', { lineHeight: '1.6' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5' }],
        'body-xs': ['0.75rem', { lineHeight: '1.5' }],
        // Label sizes
        'label-lg': ['0.875rem', { lineHeight: '1.25', fontWeight: '500' }],
        'label-md': ['0.8125rem', { lineHeight: '1.25', fontWeight: '500' }],
        'label-sm': ['0.75rem', { lineHeight: '1.25', fontWeight: '500' }],
      },

      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },

      /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
         BORDER RADIUS TOKENS
         Purpose: Consistent, enterprise-grade corner radii
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
      borderRadius: {
        'none': '0',
        'sm': '0.25rem',    // 4px - Subtle
        'DEFAULT': '0.5rem', // 8px - Default
        'md': '0.625rem',   // 10px
        'lg': '0.75rem',    // 12px
        'xl': '1rem',       // 16px - Cards
        '2xl': '1.25rem',   // 20px - Large cards
        '3xl': '1.5rem',    // 24px - Sections
        'full': '9999px',   // Pills/Badges
      },

      /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
         SHADOW TOKENS
         Purpose: Refined depth system for enterprise UI
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
      boxShadow: {
        'xs': '0 1px 2px 0 rgba(0, 0, 0, 0.02)',
        'sm': '0 1px 3px 0 rgba(0, 0, 0, 0.04), 0 1px 2px 0 rgba(0, 0, 0, 0.02)',
        'DEFAULT': '0 2px 6px 0 rgba(0, 0, 0, 0.04), 0 1px 3px 0 rgba(0, 0, 0, 0.03)',
        'md': '0 4px 12px 0 rgba(0, 0, 0, 0.05), 0 2px 6px 0 rgba(0, 0, 0, 0.03)',
        'lg': '0 8px 24px 0 rgba(0, 0, 0, 0.06), 0 4px 12px 0 rgba(0, 0, 0, 0.04)',
        'xl': '0 16px 40px 0 rgba(0, 0, 0, 0.08), 0 8px 20px 0 rgba(0, 0, 0, 0.05)',
        '2xl': '0 24px 48px 0 rgba(0, 0, 0, 0.10), 0 12px 24px 0 rgba(0, 0, 0, 0.06)',
        // Primary brand shadows
        'primary-sm': '0 1px 3px 0 rgba(59, 130, 246, 0.2), 0 1px 2px 0 rgba(59, 130, 246, 0.15)',
        'primary': '0 4px 12px 0 rgba(59, 130, 246, 0.25), 0 2px 6px 0 rgba(59, 130, 246, 0.2)',
        'primary-lg': '0 8px 24px 0 rgba(59, 130, 246, 0.3), 0 4px 12px 0 rgba(59, 130, 246, 0.2)',
        // Inset shadows for inputs
        'inner-sm': 'inset 0 1px 2px 0 rgba(0, 0, 0, 0.03)',
        'none': 'none',
      },

      /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
         ANIMATION TOKENS
         Purpose: Smooth, performant transitions
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
      animation: {
        'scroll': 'scroll 40s linear infinite',
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
      },

      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },

      /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
         TRANSITION TOKENS
         Purpose: Consistent easing and duration
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
      transitionTimingFunction: {
        'ease-out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'ease-out-smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'ease-in-out-smooth': 'cubic-bezier(0.65, 0, 0.35, 1)',
      },

      transitionDuration: {
        '250': '250ms',
        '350': '350ms',
        '400': '400ms',
      },

      /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
         CONTAINER TOKENS
         Purpose: Consistent layout widths
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
      maxWidth: {
        'content': '1400px',
        'narrow': '800px',
        'reading': '680px',
      },
    },
  },
  plugins: [],
}
