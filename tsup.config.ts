import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: {
    resolve: true,
    entry: 'src/index.ts',
    compilerOptions: {
      moduleResolution: 'node',
      emitDeclarationOnly: true,
      declaration: true,
      declarationMap: true,
    },
  },
  sourcemap: true,
  clean: true,
  minify: true,
  treeshake: true,
  bundle: true,
  splitting: false,
  outDir: 'dist',
  external: [
    'commander',
    'chalk',
    'cosmiconfig',
    'fs-extra',
    'lodash.camelcase',
    'lodash.kebabcase',
    'lodash.startcase',
    'lodash.template',
    'ora',
    'prompts',
    'ts-morph',
    'tsconfig-paths',
    'zod',
  ],
}); 