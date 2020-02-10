const path = require('path');
const glob = require('glob');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = (env, options) => ({
  optimization: {
    minimizer: [
      new UglifyJsPlugin({ cache: true, parallel: true, sourceMap: false }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  entry: {
    './js/app.js': ['./js/app.js'].concat(glob.sync('./vendor/**/*.js'))
  },
  resolve: {
    extensions: ['.js', '.json', '.vue'],
    modules: [path.join(__dirname, './'), 'node_modules'],
    alias: {
      'vue$': 'vue/dist/vue.common.js',
      'src': path.resolve(__dirname, 'js/'),
      '@': path.resolve(__dirname, "dist/"),
      'Components': path.resolve(__dirname, 'dist/components/'),
      'Constants': path.resolve(__dirname, 'dist/constants/'),
      'Container': path.resolve(__dirname, 'dist/container/'),
      'Helpers': path.resolve(__dirname, 'dist/helpers/'),
      'Assets': path.resolve(__dirname, 'dist/assets/'),
      'Themes': path.resolve(__dirname, 'dist/themes/'),
      'Views': path.resolve(__dirname, 'dist/views/'),
      'lib': path.resolve(__dirname, 'dist/lib/'),
    }
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, '../priv/static/js')
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: 'vue-loader',
        options: {
          loaders: {
            js: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
                plugins: ['@babel/transform-runtime']
              }
            }
          }
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/transform-runtime']
          }
        }
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
          // outputPath: '../img'
        }
      },
      {
        test: /\.(woff|woff2?|eot|ttf|otf|mp3|wav)(\?.*)?$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]',
          outputPath: '../fonts'
        }
      },
      {
        test: /\.svg$/,
        loader: 'url-loader'
      },
      {
        test: /\.scss$/,
        loader: ['vue-style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.sass$/,
        loader: [MiniCssExtractPlugin.loader,'sass-loader?indentedSyntax', 'css-loader', 'vue-style-loader']
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({ filename: '../css/app.css' }),
    // new CopyWebpackPlugin([{ from: 'dist/assets/images/', to: '../images' }]),
    new CopyWebpackPlugin([{ from: 'dist/static/', to: '../Static' }]),
    // new CopyWebpackPlugin([{ from: 'dist/assets/images/', to: '../img' }]),
    new CopyWebpackPlugin([{ from: 'css/', to: '../css' }]),
    new CopyWebpackPlugin([{ from: 'dist/static/favicon.ico', to: '../' }])
  ]
});
