import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: '/src',
      components: '/src/components',
      hooks: '/src/hooks',
      pages: '/src/pages',
      stores: '/src/stores',
      assets: '/src/assets',
      constants: '/src/constants',
      types: '/src/types',
      utils: '/src/utils',
      // apis: '/src/apis',
      // atoms: '/src/components/atoms',
      molecules: '/src/components/molecules',
      organisms: '/src/components/organisms',
      templates: '/src/components/templates',
    },
  },
});
