//@ts-nocheck
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "~": "/src/styles",
    },
  },
  plugins: [react(), svgr({})],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./setup-tests.js",
  },
});
