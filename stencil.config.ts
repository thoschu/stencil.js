import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { postcss } from '@stencil-community/postcss';
import autoprefixer from 'autoprefixer';

export const config: Config = {
  namespace: 'test-lib',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  testing: {
    browserHeadless: "new",
  },
  plugins: [
    sass(),
    postcss({
      plugins: [autoprefixer()]
    })
  ]
};
