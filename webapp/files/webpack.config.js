// jshint node: true, esversion: 6

const resolve = require("path").resolve;

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
