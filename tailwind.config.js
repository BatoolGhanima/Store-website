/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
       // 'custom-gradient': 'linear-gradient(to top,#1F412A, #50A76B)',
        'custom-gradient': 'linear-gradient(to top,#FFC7ED, #7D8ABC)',
      },
    },
  },
  plugins: [],
}
