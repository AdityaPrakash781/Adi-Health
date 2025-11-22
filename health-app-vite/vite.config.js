import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Update this if your backend runs on a different port.
const BACKEND_URL = "http://localhost:5000";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: BACKEND_URL, // your backend URL
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
