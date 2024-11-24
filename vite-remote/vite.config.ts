import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";
import remoteConfig from "./remote.config";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    base: env.VITE_BASE_URL,
    build: {
      modulePreload: false,
      target: "chrome91",
      minify: true,
    },
    css: {
      modules: {
        localsConvention: "camelCase",
        generateScopedName: "[local]-[hash:base64:5]",
      },
    },
    server: {
      port: 4174,
      host: true,
    },
    preview: {
      port: 4174,
      host: true,
    },
    plugins: [
      federation(remoteConfig),
      react(),
    ],
  };
});
