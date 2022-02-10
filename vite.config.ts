import reactRefresh from "@vitejs/plugin-react-refresh";
import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // plugins: [react()],
  plugins: [reactRefresh()],
  resolve: {
    alias: [
      {
        find: "./runtimeConfig",
        replacement: "./runtimeConfig.browser",
      },
    ],
  },
  build: {
    rollupOptions: {
      output: {
        intro: "if(exports === undefined){var exports ={}; var self = {}}",
      },
    },
  },
});
