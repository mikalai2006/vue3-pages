import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default ({ mode }) => {
  return defineConfig({
    plugins: [vue()],
    base: "/vue3-pages/", // mode === "production" ? "/vue3-pages/" : "/",
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "/src"),
      },
    },
    server: {
      open: true,
    },
  });
};
