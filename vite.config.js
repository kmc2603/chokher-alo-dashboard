import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: '.', // Make sure it points to current directory
  plugins: [react()],
});
