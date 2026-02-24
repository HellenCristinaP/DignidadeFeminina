import { defineConfig } from "vite";
import preact from '@preact/preset-vite'
import path from "path";

export default defineConfig({
  root: "./",
  plugins: [preact()],
  resolve: {
    alias: {
      "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
      'react': 'preact/compat',
      'react-dom/test-utils': 'preact/test-utils',
      'react-dom': 'preact/compat',     // Aqui é onde a mágica acontece!
      'react/jsx-runtime': 'preact/jsx-runtime',
    },
  },
  build: {
    outDir: "dist",
  },
});
