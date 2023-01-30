const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const webpack = require('webpack');

const isProductionMode = (filename, extension) => {
    return process.argv[2] === '--mode=production' ? `${filename}.min.${extension}`: `${filename}.${extension}`;
};

module.exports = {
    entry: [
        './src/site/assets/js/busca.js',
        './src/site/assets/js/detect.js',
        './src/site/assets/js/footer.js',
        './src/site/assets/js/home.js',
        './src/site/assets/js/video.js',
    ],
    output: {
      filename: `assets/js/${isProductionMode('bundle', 'js')}`,
      path: path.resolve(__dirname, './src/dist'),
      assetModuleFilename: 'assets/css/[hash][ext][query]',
      clean: true
    },
    module:{
        rules: [
            { 
                test: /\.css$/i, 
                use: [
                    MiniCssExtractPlugin.loader, 
                    {
                        loader: 'css-loader',
                        options: {
                            import: true,
                            url: true
                        }
                    }
                ] 
            },
            {
                test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
                type: "asset/resource",
            }
        ]
    },
    optimization:{
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin(),
            new ImageMinimizerPlugin({
                minimizer: {
                  implementation: ImageMinimizerPlugin.imageminGenerate,
                  options: {
                    plugins: [
                      ["jpegtran", { progressive: true }],
                      ["optipng", { optimizationLevel: 5 }],
                      [
                        "svgo",
                        {
                          plugins: [
                            {
                              name: "preset-default",
                              params: {
                                overrides: {
                                  removeViewBox: false,
                                  addAttributesToSVGElement: {
                                    params: {
                                      attributes: [
                                        { xmlns: "http://www.w3.org/2000/svg" },
                                      ],
                                    },
                                  },
                                },
                              },
                            },
                          ],
                        },
                      ],
                    ],
                  },
                },
              }),
            '...'
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ 
            template: './src/site/index.html',
            filename: 'index.html',
            hash: true,
            minify: {
              collapseWhitespace: true,
              removeComments: true,
            }
        }),
        new MiniCssExtractPlugin({
            filename: `assets/css/${isProductionMode('style', 'css')}`,
        }),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new CopyPlugin({
            patterns: [
                { from: './src/site/assets/img', to: 'assets/img' }
            ]
        })
    ],
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        compress: true,
        port: 3000
    }
};