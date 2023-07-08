import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/pwa/",
  plugins: [react(), VitePWA({ registerType: "autoUpdate" })],
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        404: "public/404.html",
      },
    },
  },
});
