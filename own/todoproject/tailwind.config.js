/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        red: '#ff0000',
        blue: '#0000ff',
      },
      gradientColorStops: {
        'red': '#ff0000',
        'blue': '#0000ff',
      },
    },
  },
  plugins: [],
}


