const webpack = require('webpack');
const getWebpackConfig = require('@nrwl/react/plugins/webpack');

function getCustomWebpackConfig(webpackConfig) {
  const config = getWebpackConfig(webpackConfig);

  config.resolve.alias = {
    //...config.resolve.alias,
    'react-native$': 'react-native-web',
  };
  config.resolve.extensions = [ '.web.js', '.js', '.web.ts', '.ts', '.web.tsx', '.tsx',  '.mjs' ]

  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      __DEV__: process.env.NODE_ENV !== 'production' || true,
    }),
  );

  config.module.rules.push(
    {
      test: /\.(js|jsx)$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            'module:metro-react-native-babel-preset',
          ],
          plugins: [
            "react-native-reanimated/plugin",
            ["react-native-web", { "commonjs": true }],
          ]
        },
      },
    }
  );

  config.module.rules.push(
    {
      test: /\.(gif|jpe?g|png|svg)$/,
      use: {
        loader: 'url-loader',
        options: {
          name: '[name].[ext]',
          esModule: false,
        }
      }
    }
  );

  return config;
}

module.exports = getCustomWebpackConfig;