// jshint esversion: 6

function parsePackageInfo([key, value]) {
  if (Array.isArray(value)) {
    return value.map(value => parsePackageInfo([key, value]));
  } else {
    return `// @${key} ${value}`;
  }
}

const makeBanner = data =>
  [
    "// ==UserScript==",
    ...Object.entries(data).flatMap(parsePackageInfo),
    "// ==/UserScript=="
  ].join("\n") + "\n";

export default {
  input: "src/userscript.js",
  output: {
    file: "userscript.bundle.js",
    format: "iife"
  },

  plugins: [{ banner: () => makeBanner(require("./package.json").userscript) }]
};
