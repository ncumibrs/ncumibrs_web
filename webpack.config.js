const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = (env, argv) => {
  const isDevelopment = argv.mode === 'development';

  return {
    entry: {
      main: './src/js/index.js',
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: isDevelopment ? 'js/[name].js' : 'js/[name].[contenthash].js',
      assetModuleFilename: 'assets/[name][ext]',
      clean: true,
    },
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist'),
      },
      compress: true,
      port: 3000,
      hot: true,
      open: true,
      watchFiles: ['src/**/*'],
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
        {
          test: /\.css$/,
          use: [
            isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
          ],
        },
        {
          test: /\.(png|jpe?g|gif|svg|webp)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'assets/img/[name][ext]',
          },
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'assets/fonts/[name][ext]',
          },
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html',
        chunks: ['main'],
        minify: !isDevelopment,
      }),
      new HtmlWebpackPlugin({
        template: './src/inner-page.html',
        filename: 'inner-page.html',
        chunks: ['main'],
        minify: !isDevelopment,
      }),
      new HtmlWebpackPlugin({
        template: './src/blog-article.html',
        filename: 'blog-article.html',
        chunks: ['main'],
        minify: !isDevelopment,
      }),
      new HtmlWebpackPlugin({
        template: './src/blog-cocktail-history.html',
        filename: 'blog-cocktail-history.html',
        chunks: ['main'],
        minify: !isDevelopment,
      }),
      new HtmlWebpackPlugin({
        template: './src/blog-cocktail-story.html',
        filename: 'blog-cocktail-story.html',
        chunks: ['main'],
        minify: !isDevelopment,
      }),
      new HtmlWebpackPlugin({
        template: './src/blog-global-cocktail.html',
        filename: 'blog-global-cocktail.html',
        chunks: ['main'],
        minify: !isDevelopment,
      }),
      new HtmlWebpackPlugin({
        template: './src/blog-home-bar.html',
        filename: 'blog-home-bar.html',
        chunks: ['main'],
        minify: !isDevelopment,
      }),
      new HtmlWebpackPlugin({
        template: './src/blog-modern-mixology.html',
        filename: 'blog-modern-mixology.html',
        chunks: ['main'],
        minify: !isDevelopment,
      }),
      new HtmlWebpackPlugin({
        template: './src/template.html',
        filename: 'template.html',
        chunks: ['main'],
        minify: !isDevelopment,
      }),
      new HtmlWebpackPlugin({
        template: './src/google3abceb711b9971ba.html',
        filename: 'google3abceb711b9971ba.html',
        inject: false,
        minify: !isDevelopment,
      }),
      new MiniCssExtractPlugin({
        filename: isDevelopment ? 'css/[name].css' : 'css/[name].[contenthash].css',
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: 'assets/img',
            to: 'assets/img',
            noErrorOnMissing: true,
          },
          {
            from: 'forms',
            to: 'forms',
            noErrorOnMissing: true,
          },
          {
            from: '.well-known',
            to: '.well-known',
            noErrorOnMissing: true,
          },
        ],
      }),
    ],
    optimization: {
      minimize: !isDevelopment,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            compress: {
              drop_console: true,
            },
          },
        }),
        new CssMinimizerPlugin(),
      ],
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            priority: 10,
          },
        },
      },
    },
    resolve: {
      extensions: ['.js', '.json'],
    },
    devtool: isDevelopment ? 'source-map' : false,
  };
};
