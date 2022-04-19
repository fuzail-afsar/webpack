const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/index.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Authoring Libararies",
    }),
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "webpack-numbers.js",
    // library: "webpackNumbers", //export libarary as global variable for access
    library: {
      name: "webpackNumbers",
      type: "umd",
    },
    clean: true,
  },
  externals: {
    //donot include external library in your library build (external library is required for user to use your library)
    lodash: {
      commonjs: "lodash",
      commonjs2: "lodash",
      amd: "lodash",
      root: "_",
    },
  },
};
