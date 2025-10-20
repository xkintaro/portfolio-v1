import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(() => {

  return {
    plugins: [react(), tailwindcss()],
    base: "/portfolio-v1",
  };
});
