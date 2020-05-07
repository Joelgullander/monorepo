import peerDepsExternal from "rollup-plugin-peer-deps-external";
import path from 'path';
import typescript from "rollup-plugin-typescript2";
import sass from "rollup-plugin-sass";
import commonjs from "rollup-plugin-commonjs";
import jsonPlugin from "@rollup/plugin-json";
import alias from '@rollup/plugin-alias';
import resolve from '@rollup/plugin-node-resolve';

import * as react from 'react';
import * as reactDom from 'react-dom';
import * as reactIs from 'react-is';

import packageJson from "./package.json";


const projectRootDir = path.resolve(__dirname);
const customResolver = resolve({
  extensions: ['.mjs', '.js', '.jsx', '.json', '.sass', '.scss', 'ts', 'tsx']
});

export default {
  input: "src/index.ts",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true
    }
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs({
      namedExports: {
        react: Object.keys(react),
        'react-dom': Object.keys(reactDom),
        'react-is': Object.keys(reactIs),
      },
    }),
    jsonPlugin(),
    typescript({ 
      useTsconfigDeclarationDir: true,
      tsconfig: "tsconfig.build.json",
    }),
    sass({
      insert: true
    }),
    alias({
      entries: [
        {
          find: 'src',
          replacement: path.resolve(projectRootDir, 'src')
          // OR place `customResolver` here. See explanation below.
        }
      ],
      customResolver
    }),
  ]
};