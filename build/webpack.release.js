const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.ts',

  output: {
    path: path.resolve(__dirname, '../dist/'),
    filename: 'index.js',
    libraryTarget: 'umd',
    library: 'Wxsdk',
    globalObject: 'this',
    libraryExport: 'default',
  },

  module: {
    rules: [
      {
        test: /\.(j|t)s$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-typescript'],
          plugins: ['@babel/transform-runtime'],
        },
      },
      {
        test: /\.(c|le)ss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'less-loader',
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
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024,
          },
        },
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.ts'],
    alias: {
      '@': path.resolve('./src'),
    },
  },
  experiments: {
    topLevelAwait: true,
  },
};
