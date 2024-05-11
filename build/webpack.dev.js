/*
 * @Author: Dyven
 * @Description: 
 * @Date: 2022-03-07 14:19:25
 * @LastEditors: Dyven
 * @LastEditTime: 2022-05-30 15:31:35
 */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./app.js",

  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "index.js",
  },

  module: {
    rules: [
      {
        test: /\.(j|t)s$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-typescript"],
          plugins: ["@babel/transform-runtime", ["import", { libraryName: "ant-design-vue", libraryDirectory: "es", style: "css" }]],
        },
      },
      {
        test: /\.(c|le)ss$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                strictMath: true,
              },
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024,
          },
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      scriptLoading: "blocking",
    }),
  ],

  devServer: {
    contentBase: path.join(__dirname, "../dist"),
    compress: true,
    port: 8080,
    disableHostCheck: true,
  },

  resolve: {
    extensions: [".js", ".ts", ".tsx", ".jsx", ".vue"],
    alias: {
      "@": path.resolve("./src"),
    },
  },
  experiments: {
    topLevelAwait: true,
  },
};
