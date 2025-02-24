/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      'max-lg': { max: '1024px' } // Add max-lg breakpoint
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('src/assets/pattern.svg')",
        'pattern-head': "url('src/assets/pattrens/patren.jpg')"
      }
    }
  },
  plugins: []
}
