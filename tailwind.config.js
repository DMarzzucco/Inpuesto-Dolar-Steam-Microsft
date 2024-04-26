/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        "300": "300px",
        "200": "200px",
        "100": "100px",
        "30": "30px",
      },
      height: {
        "200": "200px",
        "60": "60px",
        "40": "40px",
        "30": "30px",
      },
      colors: {
        "Nk": "Blue",
        "bgk": "#1F1F1F"
      },
      fontSize: {
        "30": "30px",
        "20": "25px",
        "13": "13px",
        "12": "12px",
        "10": "10px",
      },
      screens: {
        "ns": { "max-width": "500px" },
      }
    },
  },
  plugins: [],
}

