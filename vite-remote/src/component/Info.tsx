import remoteConfig from "../../remote.config";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import style from "./Info.module.css";
const Info = () => {
  return (
    <div>
      <h1>How to use this</h1>
      <h2>In your App</h2>
      <Install />
      <ViteConfig />
      <ReactComponent />
    </div>
  );
};

const Install = () => {
  const data = `npm install @module-federation/vite`;
  return (
    <div>
      <h4>Run below command to install</h4>
      <SyntaxHighlighter language="bash" style={vscDarkPlus}>
        {data}
      </SyntaxHighlighter>
    </div>
  );
}

const ViteConfig = () => {
  const data = `import { defineConfig } from "vite";
import { federation } from "@module-federation/vite";
import { dependencies } from "./package.json";
  
export default defineConfig({
  plugins: [
    federation({
      name: "host",
      remotes: {
        remote: {
          type: "module",
          name: "${remoteConfig.name}",
          entry: "${window?.location?.href}${remoteConfig.filename}",
          entryGlobalName: "${remoteConfig.name}",
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
      shareStrategy: "loaded-first",
    }),
  ],
});`;
  return (
    <div>
      <h4>Copy below on your</h4>
      <code>vite.config.ts</code>
      <SyntaxHighlighter language="typescript" style={vscDarkPlus}>
        {data}
      </SyntaxHighlighter>
    </div>
  );
};

const getCompName = (path: string) => {
  let match = path.match(/\/([^/]+)\.tsx$/);
  let result = match ? match[1] : null; // "Button"
  return result;
};

const ReactComponent = () => {
  const comps = Object.entries(remoteConfig.exposes || {});
  const remote = comps
    .map(([key, comp]) => {
      const compPath = typeof comp === "string" ? comp : comp.import;
      return `const ${getCompName(compPath)} = lazy(async () =>
  // @ts-ignore
  import("remote/${key.replace(/\.\/+/g, "")}").catch(() => ({
    default: () => <div>Failed to load remote component</div>,
  }))
);`;
    })
    .join("\n");

  const compName = comps
    .map(([_, comp]) => {
      const compPath = typeof comp === "string" ? comp : comp.import;
      return `<Suspense fallback={"Loading..."}>
        <${getCompName(compPath)} />
      </Suspense>`;
    })
    .join("\n      ");


  const data = `import { lazy, Suspense } from "react";

${remote}

const Remote = () => {
  return (
      ${compName}
  );
};

export default Remote;`;


  return (
    <div>
      <div className={style.compTitle}>
        <h4>Create </h4>
        <code>Remote.tsx</code>
        <h4> and copy below and add that</h4>
      </div>
      <SyntaxHighlighter language="typescript" style={vscDarkPlus}>
        {data}
      </SyntaxHighlighter>
    </div>
  );
};
export default Info;
