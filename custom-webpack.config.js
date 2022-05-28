const webpack = require('webpack');
const config = {
  plugins: [
    new webpack.DefinePlugin({
      'STABLE_FEATURE': JSON.stringify(true),
      'EXPERIMENTAL_FEATURE': JSON.stringify(false)
    })
  ],
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
}

module.exports = (env, argv) => {
  // const publicPath = (argv.mode === 'production') ? '/niivue-basic-ng' : '/';
  // config.output = {
  //   publicPath: publicPath
  // }
  return config;
};