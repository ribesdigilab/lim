// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Atkinson Hyperlegible"', 'ui-sans-serif', 'system-ui'],
        atkinson: ['"Atkinson Hyperlegible"', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}