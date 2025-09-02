const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "public"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
      meta: {
        "og:title": {property: "og:title", content: "John Kelly | Web Developer Portfolio"},
        "og:description": {property: "og:description", content: "Front-end developer with focus on building interactive and engaging digital experiences. See my latest web development projects."},
        "og:image": {property: "og:image", content: "https://raw.githubusercontent.com/JohnKelly-T/homepage/646b60eb92e62421aac6f873b0882477a87c566f/src/assets/img/og-image.png"},
        "og:url": {property: "og:url", content: "https://johnkelly-t.github.io/homepage/"},
      }
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            targets: "defaults",
            presets: [
              ['@babel/preset-env']
            ],
            cacheDirectory: true,
          }
        }
      },
    ],
  },
};
