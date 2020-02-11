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
    modules: [path.join(__dirname, 'src/'), 'node_modules'],
    alias: {
      'vue$': 'vue/dist/vue.common.js',
      // 'src': path.resolve(__dirname, 'js/'),
      '@': path.resolve(__dirname, "src/"),
      'Components': path.resolve(__dirname, 'src/components/'),
      'Constants': path.resolve(__dirname, 'src/constants/'),
      'Container': path.resolve(__dirname, 'src/container/'),
      'Helpers': path.resolve(__dirname, 'src/helpers/'),
      'Assets': path.resolve(__dirname, 'src/assets/'),
      'Themes': path.resolve(__dirname, 'src/themes/'),
      'Pages': path.resolve(__dirname, 'src/pages/'),
      'lib': path.resolve(__dirname, 'src/lib/'),
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
        loader: [MiniCssExtractPlugin.loader, 'sass-loader?indentedSyntax', 'css-loader', 'vue-style-loader']
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: '../css/app.css' }),
    // new CopyWebpackPlugin([{ from: 'src/assets/images/', to: '../images' }]),
    new CopyWebpackPlugin([{ from: 'src/static/', to: '../Static' }]),
    new CopyWebpackPlugin([{ from: 'src/pages/', to: '../Pages' }]),
    // new CopyWebpackPlugin([{ from: 'src/assets/images/', to: '../img' }]),
    new CopyWebpackPlugin([{ from: 'css/', to: '../css' }]),
    new CopyWebpackPlugin([{ from: 'src/static/favicon.ico', to: '../' }]),
    new VueLoaderPlugin()
  ]
});
