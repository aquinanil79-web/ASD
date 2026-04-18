/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
    "./pages/**/*.{ts,tsx,js,jsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        neon: {
          purple: "#8b5cf6",
          green: "#10b981"
        }
      },
      boxShadow: {
        neon: "0 6px 30px rgba(139,92,246,0.12), 0 2px 6px rgba(16,185,129,0.06)"
      }
    }
  },
  plugins: []
};