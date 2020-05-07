const path = require('path');
module.exports = {
  module: {
    rules: [{
      test: /\.scss$/,
      loaders: ["style-loader", "css-loader", "sass-loader"],
      include: path.resolve(__dirname, '../')
    },
    {
      test: /\.css/,
      loaders: ["style-loader", "css-loader"],
      include: path.resolve(__dirname, '../')
    },
    {
      enforce: 'pre',
      test: /\.js$/,
      loader: "source-map-loader",
      exclude: [
        /node_modules\//
      ]
    },
    {
      test: /\.tsx?$/,
      include: path.resolve(__dirname, '../packages'),
      use: [
        require.resolve("ts-loader"),
        {
          loader: require.resolve('react-docgen-typescript-loader'),
          options: {
            // Provide the path to your tsconfig.json so that your stories can
            // display types from outside each individual story.
            tsconfigPath: path.resolve(__dirname, "../tsconfig.json"),
          },
        },
      ],
    },
    {
      test: /\.(woff|woff2|eot|ttf|otf|png|jpe?g|svg)$/,
      loader: "file-loader"
    }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".mdx"]
  }
};