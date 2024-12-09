/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        scrollLeft: "scrollLeft 15s linear infinite",
      },
      keyframes: {
        scrollLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      colors: {
        secondary: "#74ccd3",
        dark: "#131f1f",
        light: "#F7F7F6",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "3rem",
      },
    },
  },
  variants: {
    extend: {
      // Aktifkan scroll-smooth pada elemen html dan body
      scrollBehavior: ['responsive'],
    },
  },
  plugins: [],
};