/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      zIndex: {
        '-1': '-1',
      },
      colors: {
        pink: {
          100: "#FFF5F8",
          150: "#FFE5EC",
          200: "#FFB3C6",
          300: "#FF4D7C",
          400: "#ff3369",
        },
        brown: {
          100: "#66001B",
        }
      },
      fontFamily: {
        "Poppins": "Poppins",
        "PlayFair": ['Playfair Display', 'serif']
      },
      screens: {
        "md": "950px",
        "lg": "1100px"
      }
    },
  },
  plugins: [],
}

