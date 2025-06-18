/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          beige: "#F0C888",
          peach: "#F7AF7D",
          sage: "#7EB597",
        },
        primary: {
          50: "#f9f5eb",
          100: "#f2ebd7",
          200: "#e9d7b0",
          300: "#f0c888", // Brand beige
          400: "#f7af7d", // Brand peach
          500: "#f09a6a",
          600: "#e88057",
          700: "#d66a44",
          800: "#b55639",
          900: "#94472f",
        },
        secondary: {
          50: "#edf7f2",
          100: "#dbeee5",
          200: "#b8decb",
          300: "#94cdb1",
          400: "#7eb597", // Brand sage
          500: "#5e9d7c",
          600: "#4a8c6a",
          700: "#3d7358",
          800: "#345e49",
          900: "#2c4d3d",
        },
        accent: {
          50: "#fef2e6",
          100: "#fde6cc",
          200: "#fbcc99",
          300: "#f9b366",
          400: "#f7af7d", // Brand peach (duplicate for accent)
          500: "#f58239",
          600: "#e56a20",
          700: "#be571b",
          800: "#98461b",
          900: "#7c3b19",
        },
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        float: "float 3s ease-in-out infinite",
        aurora: "aurora 15s linear infinite",
        "aurora-slow": "aurora 60s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        aurora: {
          "0%": { backgroundPosition: "0% 0%" },
          "100%": { backgroundPosition: "100% 100%" },
        },
      },
      opacity: {
        15: "0.15",
      },
    },
  },
  plugins: [],
}
