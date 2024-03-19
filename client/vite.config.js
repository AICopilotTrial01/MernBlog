import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "192.168.48.113",
    port: 5000,
    proxy: {
      "/api": {
        target: "http://localhost:8888",
        secure: false,
      },
    },
  },

  plugins: [react()],
});
