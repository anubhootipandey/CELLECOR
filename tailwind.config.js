/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(0deg, rgba(20, 138, 157, 1) 0%, rgba(75, 199, 215, 1) 100%)',
      },
    },
  },
  plugins: [],
}

