import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/pwa/",
  resolve: {
    alias: {
      find: "@",
      replacement: path.resolve(__dirname, "pwa"),
    },
  },
  plugins: [
    react(),
    tsconfigPaths(),
    VitePWA({
      includeAssets: ["**/*"],
      manifest: {
        name: "가위바위보게임",
        short_name: "가위바위보게임",
        start_url: ".",
        display: "standalone",
        background_color: "#fff",
        description: "RPS game",
        theme_color: "#fff",
        icons: [
          {
            src: "maskable_icon.png",
            sizes: "48x48",
            type: "image/png",
            purpose: "maskable",
          },
          {
            src: "maskable_icon.png",
            sizes: "72x72",
            type: "image/png",
          },
          {
            src: "maskable_icon.png",
            sizes: "96x96",
            type: "image/png",
          },
          {
            src: "maskable_icon.png",
            sizes: "144x144",
            type: "image/png",
          },
          {
            src: "maskable_icon.png",
            sizes: "168x168",
            type: "image/png",
          },
          {
            src: "maskable_icon.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "maskable_icon.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
        related_applications: [
          {
            platform: "play",
            url: "https://play.google.com/store/apps/details?id=cheeaun.hackerweb",
          },
        ],
      },
    }),
  ],
});
