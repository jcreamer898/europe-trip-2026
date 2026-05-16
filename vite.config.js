import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    svelte(),
    VitePWA({
      registerType: "autoUpdate",
      workbox: {
        globPatterns: ["**/*.{js,css,html,svg,jpg,png,webp}"],
      },
      manifest: {
        name: "Creamer Family Paris + Barcelona 2026",
        short_name: "Europe 2026",
        description:
          "Offline-ready itinerary for the Creamer family trip to Paris and Barcelona.",
        start_url: ".",
        scope: ".",
        display: "standalone",
        background_color: "#f8fafc",
        theme_color: "#1b2a4a",
        icons: [
          {
            src: "assets/icon.svg",
            sizes: "any",
            type: "image/svg+xml",
          },
          {
            src: "assets/icon-180.png",
            sizes: "180x180",
            type: "image/png",
          },
          {
            src: "assets/icon-512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
  base: "/europe-trip-2026/",
});
