const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--primary-font)", ...defaultTheme.fontFamily.sans],
        bebas: ["var(--alt-font)", ...defaultTheme.fontFamily.serif],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        primary: {
          DEFAULT: "var(--base-color)",
          50: "#fdf8ed",
          100: "#fbefda",
          200: "#f5deb0",
          300: "#ebc87d",
          500: "#be8219",
          600: "#a06714",
          700: "#805112",
          800: "#663f11",
          900: "#543511",
          950: "#2c1a07",
        },
        secondary: {
          DEFAULT: "var(--red)",
          50: "#fef3f2",
          100: "#fee3e2",
          200: "#fecaca",
          300: "#fca5a5",
          400: "#f87171",
          600: "#b91c1b",
          700: "#991b1b",
          800: "#7f1d1d",
          900: "#6c1a1a",
          950: "#450c0c",
        },
        accent: {
          DEFAULT: "var(--yellow)",
          50: "#fefbec",
          100: "#fff8d6",
          200: "#fceeb0",
          300: "#f5de7c",
          500: "#dba612",
          600: "#ba870d",
          700: "#96670f",
          800: "#7c5113",
          900: "#674315",
        },

        dark: {
          50: "var(--very-light-gray)", // Lightest - almost white
          100: "#FAF6F4", // Very light warm gray
          500: " var(--medium-gray)", // Medium gray
          900: "var(--dark-gray)", // Very dark gray
          950: "var(--black)",
        },
      },
      backgroundImage: {
        "hero-bg": "url('/hero.webp')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
