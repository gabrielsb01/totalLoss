var path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const koutoSwiss = require('kouto-swiss');
const jeet = require('jeet');
const rupture = require('rupture');
const Dotenv = require('dotenv-webpack');
require('dotenv').config();


const config = require('./config-dev.json')

process.traceDeprecation = true;

const outputDirectory = 'dist';

module.exports = {
	performance: {
		hints: false,
		maxEntrypointSize: 512000,
		maxAssetSize: 512000
	},
	resolve: {
		extensions: ['*', '.ts', '.tsx', '.json']
	  },
	entry: [
		'react-hot-loader/patch',
		"./index.tsx"
	],
	output: {
    path: path.join(__dirname,outputDirectory),
		filename: 'bundle.[hash].js',
		publicPath: '/'
	},
	context: path.resolve(__dirname, 'src'),
	devServer: {
		contentBase: path.resolve(__dirname, 'dist/assets'),
		open: true,
		compress: true,
		hot: true,
		historyApiFallback: true
	},
	devtool: 'inline-source-map',
  plugins: [
    new Dotenv(),
    new HtmlWebpackPlugin({ // Create HTML file that includes references to bundled CSS and JS.
      template: './index.ejs'
    }),
		new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      config: JSON.stringify(config)
		}),
  ],
  resolve: {
    alias: {
      react: path.resolve(__dirname, '.', 'node_modules/react'),
      '@components': path.resolve(__dirname, '.', 'src', 'components'),
      '@containers': path.resolve(__dirname, '.', 'src', 'containers'),
      '@core': path.resolve(__dirname, '.', 'src', 'core'),
      '@assets': path.resolve(__dirname, '.', 'src', 'assets'),
      '@router': path.resolve(__dirname, '.', 'src', 'router.js')
    },
    extensions: ['*', '.ts', '.tsx', '.js', '.json', '.yml']
  },
  module: {
    rules: [
			{ test: /\.tsx?$/, loader: "awesome-typescript-loader" },
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
      {
        test: /\.(styl|component.styl|container.styl)$/,
        use: [
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          {
            loader: 'stylus-loader',
            options: {
              use: [koutoSwiss(), jeet(), rupture()]
            }
          }
        ]
      },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader' },
      { test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=8192' }
    ]
  }
}
