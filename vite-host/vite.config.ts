import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";
import { dependencies } from "./package.json";

// https://vite.dev/config/
export default defineConfig({
  base: "http://localhost:5175/",
  server: {
    open: true,
    port: 5175,
    host:true
  },
  preview: {
    port: 5175,
    host:true
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
          entry: "http://localhost:4174/remoteEntry.js",
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
});
