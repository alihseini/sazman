import tailwindcss from "@tailwindcss/vite";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import basicSsl from "@vitejs/plugin-basic-ssl";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    server: {
      host: "test.api.bazresi.ir",
      https: true, // اگر از basicSsl استفاده می‌کنی این باید باشه
    },
    plugins: [react(), basicSsl(), tailwindcss()],
    define: {
      APP_ENV: JSON.stringify(env.APP_ENV),
    },
  };
});
