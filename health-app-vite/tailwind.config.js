/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb",
        secondary: "#6366F1",
        lightBg: "#f1f5f9",
        neutralBg: "#f9fafb",
        darkText: "#0f172a",
        foreground: "#0f172a",
        border: "#e2e8f0",
        input: "#e2e8f0",
        card: "#ffffff",
        "muted-foreground": "#64748b",
        "secondary-foreground": "#f1f5f9",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};