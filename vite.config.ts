//@ts-nocheck
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "path";

const isGhPages = process.env.NODE_ENV === "production";

export default defineConfig({
  base: isGhPages ? "/sample-app/" : "/",
  resolve: {
    alias: {
      "~": "/src/styles",
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [react(), svgr()], // TypeScript może podkreślać, ale działa
  server: {
    historyApiFallback: true,
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./setup-tests.js",
  },
});
