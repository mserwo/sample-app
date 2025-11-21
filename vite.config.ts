//@ts-nocheck
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "~": "/src/styles",
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [react(), svgr()], // TypeScript może podkreślać, ale działa
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./setup-tests.js",
  },
});
