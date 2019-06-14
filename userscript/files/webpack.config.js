// jshint node: true, esversion: 6

const resolve = require("path").resolve;
const packageInfo = require("./package.json");
const webpack = require("webpack");

const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: "./userscript.ts",
  mode: "production",
  output: {
    filename: "[name].js",
    path: resolve(__dirname, "dist")
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  plugins: [
    new webpack.BannerPlugin({
      banner:
        [
          "// ==UserScript==",
          ...Object.entries(packageInfo.userscript).map(
            ([key, value]) => `// @${key} ${value}`
          ),
          "// ==/UserScript=="
        ].join("\n") + "\n",
      raw: true
    })
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({ terserOptions: { output: { comments: true } } })
    ]
  },
  module: {
    rules: [
      {
        test: /\\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            passPerPreset: true,
            presets: [
              "@babel/preset-typescript",
              [
                "@babel/preset-env",
                {
                  targets: "> 0.25%, not dead",
                  modules: false,
                  exclude: ["@babel/plugin-transform-regenerator"]
                }
              ]
            ],
            plugins: ["@babel/plugin-proposal-class-properties"]
          }
        }
      }
    ]
  }
};
