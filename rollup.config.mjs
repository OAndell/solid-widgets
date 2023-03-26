import resolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import { babel } from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";
import { embedCSSPlugin } from "rollup-plugin-embed-css";
import styles from "rollup-plugin-styles";

const extensions = [".ts", ".tsx"];

export default {
  input: "./src/index.ts",
  output: {
    file: "dist/widget.mjs",
    format: "es",
    assetFileNames: "[name]-[hash][extname]",
  },
  external: [],
  plugins: [
    replace({
      "process.env.NODE_ENV": JSON.stringify("production"),
      preventAssignment: true,
    }),
    styles(),
    resolve({ extensions }),
    babel({
      exclude: "node_modules/**",
      presets: ["solid", "@babel/preset-typescript"],
      extensions,
    }),
    terser({ output: { comments: false } }),
  ],
};
