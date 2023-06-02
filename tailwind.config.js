/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      "open-sans":["Open Sans", "sans-serif"],
      "poppins":["Poppins", "sans-serif"],
    }
  },
  plugins: [daisyui],
  daisyui: {
    themes: [{
      mytheme: {
        primary: "#EA8115",
        secondary: "#EEEEEE",
        "base-100": "#0C0700",
      },
    }]
  }
}

