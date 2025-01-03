/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"], // Base font
        grotesk: ["Space Grotesk", "sans-serif"], // Optional font
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        primary: "#E3000E",
        secondary: {
          500: "#F7BA1E",
          600: "#D69F17",
        },
        dark: {
          900: "#080808",
        },
      },
      backgroundImage: {
        "hero-bg": "url('/hero.webp')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
