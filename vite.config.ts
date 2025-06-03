import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import basicSsl from "@vitejs/plugin-basic-ssl";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    server: {
      host: "test.api.bazresi.ir",
      https: true,
    },
    plugins: [
      react(),
      basicSsl(),
      tailwindcss(),
      VitePWA({
        registerType: "autoUpdate",
        includeAssets: ["favicon.svg", "robots.txt", "apple-touch-icon.png"],
        manifest: {
          name: "Bazresi App",
          short_name: "Bazresi",
          start_url: "/",
          display: "standalone",
          background_color: "#ffffff",
          theme_color: "#0f172a",
          icons: [
            { src: "icons/icon-192.png", sizes: "192x192", type: "image/png" },
            { src: "icons/icon-512.png", sizes: "512x512", type: "image/png" },
            {
              src: "icons/icon-512.png",
              sizes: "512x512",
              type: "image/png",
              purpose: "any maskable",
            },
          ],
        },
        workbox: {
          cleanupOutdatedCaches: true,
          sourcemap: true,
        },
        devOptions: {
          enabled: true,
        },
      }),
    ],
    define: {
      APP_ENV: JSON.stringify(env.APP_ENV),
    },
  };
});
