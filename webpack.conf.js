const path = require('path');

const glob = require('glob');

function getEntries(pattern) {
  const entries = {};

  glob.sync(pattern).forEach((file) => {
    let filename = file.replace('./packages/', '')
    filename = filename.replace('.jsx', '.js')
    entries[filename] = path.join(__dirname, file);
    // entries[file.replace('./packages/', '')] = path.join(__dirname, file);
  });

  return entries;
}

module.exports = {
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      '@Typography': path.resolve(__dirname, 'packages/Typography'),
      '@Colors': path.resolve(__dirname, 'packages/Colors'),
      '@Links': path.resolve(__dirname, 'packages/Hyperlinks/Links'),
      '@Grid': path.resolve(__dirname, 'packages/Grid'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              require("babel-preset-stage-1")
            ],
            plugins: [
              require("babel-plugin-transform-do-expressions"),
              require("babel-plugin-transform-function-bind")
            ]
          }
        }
      },
    ]
  }
};