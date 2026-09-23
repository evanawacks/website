import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// The component library (wacks-ui): ESM + one stylesheet, React external.
export default defineConfig({
  plugins: [react()],
  publicDir: false,
  build: {
    outDir: "dist",
    emptyOutDir: true,
    lib: {
      entry: "src/index.ts",
      formats: ["es"],
      fileName: () => "index.js",
      cssFileName: "wacks-ui",
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime", "react-dom/client"],
    },
  },
});
