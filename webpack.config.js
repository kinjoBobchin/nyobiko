import webpack from 'webpack';

const APP_ID = process.env.APP_ID;

module.exports = {
  cache: true,
  devtool: 'eval',
  entry: {
    bundle: [
      './src/index.js'
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        APP_ID: JSON.stringify(`${APP_ID}`),
      },
    }),
  ],
};