/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb",     // blue-600
        lightBg: "#f1f5f9",     // slate-100
        darkText: "#0f172a",    // slate-900
        border: "#e2e8f0",      // slate-200
      },
    },
  },
  plugins: [],
};

