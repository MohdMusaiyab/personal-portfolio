// I have changed this File so that it can be accessed from other devices on the same network
// In the case of emergency revert the changes in it to the original file
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // This allows the server to be accessible externally
    port: 5173, // Change to your desired port
    strictPort: true,
    open: true, // This opens the browser on the local machine
  },
});
