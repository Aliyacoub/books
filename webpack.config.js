const path = require('path');
const webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
new MiniCssExtractPlugin({ filename: 'css/style.css' }),
  (module.exports = {
    entry: {
      app: './src/index.js',
    },

    output: {
      path: path.join(__dirname, '/dist'),
      publicPath:'',
      filename: 'main.js',
    },
    mode: 'development',
    devServer: {
      contentBase:  path.join(__dirname, '/dist'),
      port:1229,
      writeToDisk: true,
      open:true,
    },
    module: {
      rules: [
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader',
              options: {
                minimize: true,
              },
            },
          ],
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader, 
              options: {
                publicPath: '../' 
              }
            },
            'css-loader',
            'sass-loader'
          ]
        },
        {
          test: /\.(png|svg|jpe?g|gif)$/,
          use: [
           
            {
              loader:"file-loader",
              options:{
                name:'[name].[ext]',
                outputPath:"images",
            }
            }
          ]
        },
        {
          test: /\.(svg|eot|woff|woff2|ttf)$/,
        use: [
          {
            loader: "file-loader", 
            options: {
              name: '[name].[ext]',
              outputPath: "fonts",
              esModule: false,
            }
            }
          ]
        },
        {
          test: /\.(mov|mp4)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath:"videos",
              }  
            }
          ]
        },
        {
          test: require.resolve("jquery"),
          loader: "expose-loader",
          options: {
            exposes: ["$", "jQuery"],
          },
        },
      ],
    },
  
    plugins: [
      new MiniCssExtractPlugin({ filename: 'css/style.css' }),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './src/index.html',
      }),
      new HtmlWebpackPlugin({
        filename: 'freelancing.html',
        template: './src/freelancing.html',
      }),
      new HtmlWebpackPlugin({
        filename: 'User-Experience.html',
        template: './src/User-Experience.html',
      }),
      new HtmlWebpackPlugin({
        filename: 'PostgreSQL.html',
        template: './src/PostgreSQL.html',
      }),
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery'",
        "window.$": "jquery"
      }),
      new  OptimizeCssAssetsPlugin({}),
    ],

  });
 