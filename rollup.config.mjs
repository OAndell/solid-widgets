import resolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import { babel } from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";

const extensions = [".ts", ".tsx"];

export default {
  input: "./src/index.ts",
  output: {
    file: "dist/widget.mjs",
    format: "es",
  },
  external: [],
  plugins: [
    replace({
      "process.env.NODE_ENV": JSON.stringify("production"),
      preventAssignment: true,
    }),
    resolve({ extensions }),
    babel({
      exclude: "node_modules/**",
      presets: ["solid", "@babel/preset-typescript"],
      extensions,
    }),
    terser({ output: { comments: false } }),
  ],
};
