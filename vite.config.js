import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // Maps "src" to "@"
      call_helpers: path.resolve(__dirname, "src/call_helpers"), // Add your missing alias
    },
  },
  css: {
    devSourcemap: false,
  },
});
