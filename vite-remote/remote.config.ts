import { ModuleFederationOptions } from "@module-federation/vite/lib/utils/normalizeModuleFederationOptions";
import { dependencies } from "./package.json";

const remoteConfig: ModuleFederationOptions = {
  filename: "remoteEntry.js",
  name: "remote",
  exposes: {
    "./remote-routes": "./src/component/remote/Routes.tsx",
    "./remote-event": "./src/component/remote/Event.tsx",
  },
  remotes: {},
  shared: {
    react: {
      requiredVersion: dependencies.react,
      singleton: true,
    },
    "react-router": {
      requiredVersion: dependencies["react-router"],
      singleton: true,
    },
  },
  shareStrategy: "loaded-first",
};

export default remoteConfig;
