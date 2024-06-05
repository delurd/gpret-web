const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './public/scripts/index.js',
  // entry: {
  //   script: {
  //     import: './assets/scripts/index.js',
  //     //   filename: 'scripts/index.js',
  //   },
  // },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public/production/assets'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              url: false,
            },
          },
        ],
      },
    ],
  },

  plugins: [new MiniCssExtractPlugin()],
};
