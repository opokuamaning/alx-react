const path = require("path");

module.exports = {
  mode: "production", // Set the mode to production
  entry: {
    main: path.resolve(__dirname, "./js/dashboard_main.js"),
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      // Rule for CSS files
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      // Rule for image files
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: "asset/resource",
        use: [
          {
            loader: "image-webpack-loader",
            options: {
              mozjpeg: {
                progressive: true,
              },
              optipng: {
                enabled: true,
              },
              pngquant: {
                quality: [0.65, 0.9],
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
            },
          },
        ],
      },
    ],
  },
};
