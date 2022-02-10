module.exports = {
  entry: "./src/index.js",
  output: {
    path: `${process.cwd()}/dist-webpack`,
    filename: "index.js",
  },
  target: "web",
  devtool: "source-map"
};
