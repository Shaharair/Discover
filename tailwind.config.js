import { Container } from 'postcss';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    maxWidth: {
      Container:"1280px"
    },
    backgroundImage: {
      'ban':"url(./src/assets/banner.jpg)",
      'group':"url(./src/assets/banner2.jpg)"
    },
    fontFamily: {
      'sans': ['Open Sans', 'sans-serif',]
    }
  },
  plugins: [],
}