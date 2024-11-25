import { ModuleFederationOptions } from "@module-federation/vite/lib/utils/normalizeModuleFederationOptions";
import { dependencies } from "./package.json";

const remoteConfig:ModuleFederationOptions = {
    filename: "remoteEntry.js",
    name: "remote",
    exposes: {
      "./remote-button": "./src/component/remote/Button.tsx",
    },
    remotes: {},
    shared: {
      react: {
        requiredVersion: dependencies.react,
        singleton: true,
      },
    },
    shareStrategy: "loaded-first",
  }

  export default remoteConfig;