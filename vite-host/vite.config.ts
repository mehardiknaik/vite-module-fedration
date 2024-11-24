import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";
import { dependencies } from "./package.json";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    server: {
      open: true,
      port: 5175,
      host: true,
    },
    preview: {
      port: 5175,
      host: true,
    },
    build: {
      modulePreload: false,
      target: "chrome91",
      minify: true,
    },
    plugins: [
      federation({
        name: "host",
        remotes: {
          remote: {
            type: "module",
            name: "remote",
            entry: `${env.VITE_REMOTE_URL}remoteEntry.js`,
            entryGlobalName: "remote",
            shareScope: "default",
          },
        },
        exposes: {},
        filename: "remoteEntry.js",
        shared: {
          react: {
            requiredVersion: dependencies.react,
            singleton: true,
          },
        },
      }),
      react(),
    ],
  };
});