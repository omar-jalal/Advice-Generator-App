/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [require("daisyui")],
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
    colors: {
      'light-cyan': 'hsl(193, 38%, 86%)',
      'neon-green': 'hsl(150, 100%, 66%)',
      'grayish-blue': 'hsl(217, 19%, 38%)',
      'dark-grayish-blue': 'hsl(217, 19%, 24%)',
      'dark-blue': 'hsl(218, 23%, 16%)',
      'white' : '#ffffff',
    },
    fontFamily: {
      'manrope': ['Manrope', 'sans-serif']
    },
    fontSize: {
      '2xl': '1.75em',
      'lg': '1.5em'
    },
    borderWidth: {
      '12': '.75em',
    },dropShadow: {
      '2xl': '0 0 25px hsl(150, 100%, 66%)',
      '3xl': '0 0 25px hsl(218, 23%, 10%)',
    },
    screens: {
      'sm': '320px',
      // => @media (min-width: 640px) { ... }

      'md': '481px',
      // => @media (min-width: 768px) { ... }

      'lg': '769px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1025px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1201px',
      // => @media (min-width: 1536px) { ... }
    }
  }
};