/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        g1: '#1a2e1a',
        g2: '#2d5a27',
        g3: '#4a7c35',
        g4: '#8aad5c',
        g5: '#d4e89a',
        gbg: '#f8faf2',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
