import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import autoprefixer from "autoprefixer";
import tailwindcss from "tailwindcss";
import preload from "vite-plugin-preload";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), preload()],
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
});
