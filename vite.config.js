import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';

// https://vitejs.dev/config/
export default defineConfig({
  base: './riyadahmed',
  plugins: [react(), tailwindcss()],
  ssr: {
    noExternal: ["react-icons"],
  },
})
