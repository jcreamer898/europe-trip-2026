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
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
  base: "/europe-trip-2026/",
});
