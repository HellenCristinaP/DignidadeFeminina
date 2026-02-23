import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  root: './', // Define a raiz onde está o index.html
  resolve: {
    alias: {
      // Atalho para importar o Bootstrap mais fácil no Sass
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    }
  },
  build: {
    outDir: 'dist',
  }
});