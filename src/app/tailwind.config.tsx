// tailwind.config.js
/** @type {import('tailwindcss').Config} */


module.exports = {
    content: [
      './app/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        fontFamily: {
          jost: ['var(--font-jost)', 'sans-serif'],
          urbanist: ['var(--font-urbanist)', 'sans-serif'],
          poppins: ['var(--font-poppins)', 'sans-serif'],
          outfit: ['var(--font-outfit)', 'sans-serif'],
          prompt: ['var(--font-prompt)', 'sans-serif'],
          kayak:['Kayak', 'sans-serif'],
          // kayak: ['var(--font-kayak)'],
        },
      },
    },
    plugins: [],
  }
  