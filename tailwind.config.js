/* eslint-env node */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    './node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#facc15',
        secondary: '#fefce8',
        secondaryHover: '#C4CFD0',
        accent: '#422006',
        gray: {
          light: '#EAEAEA',
          dark: '#7C7C7C',
        },
        danger: {
          main: '#E42F2F',
          sub: '#FFCCCC',
          hover: '#E5B8B8',
        },
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

