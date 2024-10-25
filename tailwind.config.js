/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      letterSpacing: {
        extremeWide: '0.4em', // new value
      },
      colors: {
        primary: '#F6F1F0', 
        secondary: '#00674F', 
        // secondary: '#BD945A', 
        accent: '#F9F871',
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['"Cormorant Garamond"', 'serif'],
        body2: ['"Dosis"', 'sans-serif'],
        cursive: ['"Alex Brush"', 'cursive'],
        cursive2: ['"Great Vibes"', 'cursive'],
        date: ['"Nunito"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}