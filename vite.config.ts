import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Maps "@" to the "src" folder
      "@": path.resolve(__dirname, "./src"),
      // Maps "@shared" to "src/shared"
      "@shared": path.resolve(__dirname, "./src/shared"),
    },
  },
  // Ensure the build output goes to "dist"
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
  server: {
    host: true, // Allows network access
    strictPort: true,
  }
});