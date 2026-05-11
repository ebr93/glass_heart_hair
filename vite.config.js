import { defineConfig } from "vite";

export default defineConfig({
  base: "/glass_heart_hair/",
  server: {
    port: 5173
  },
  build: {
    outDir: "dist"
  }
});
