import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// The website. Relative base so the same build works at
// https://evanawacks.github.io/website/ and at a custom domain root.
export default defineConfig({
  root: "site",
  base: "./",
  plugins: [react()],
  build: {
    outDir: "../dist-site",
    emptyOutDir: true,
  },
});
