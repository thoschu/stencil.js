import { Config } from "@stencil/core";
import { sass } from "@stencil/sass";
import { postcss } from "@stencil-community/postcss";
import autoprefixer from "autoprefixer";

export const config: Config = {
  namespace: "canvas-component",
  outputTargets: [
    {
      type: "dist",
      esmLoaderPath: "../loader",
    },
    {
      type: "dist-custom-elements",
      customElementsExportBehavior: "single-export-module",
      externalRuntime: false,
      isPrimaryPackageOutputTarget: true,
      generateTypeDeclarations: true,
    },
    {
      type: "docs-readme",
    },
    {
      type: "www",
      serviceWorker: null, // disable service workers
    },
  ],
  testing: {
    browserHeadless: "new",
  },
  plugins: [
    sass(),
    postcss({
      plugins: [autoprefixer()],
    }),
  ],
  validatePrimaryPackageOutputTarget: true,
};
