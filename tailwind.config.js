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
        dark: {
          900: "#080808",
        },
      },
      backgroundImage: {
        "hero-bg": "url('./hero.png')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
