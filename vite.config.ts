import { defineConfig } from "vite";

export default defineConfig({
  esbuild: {
    jsx: "transform",
    jsxFactory: "h",
    jsxInject: `import { h } from '~/runtime/jsx-runtime'`,
  },
  resolve: {
    alias: {
      "~": new URL("src", import.meta.url).pathname,
    },
  },
});
