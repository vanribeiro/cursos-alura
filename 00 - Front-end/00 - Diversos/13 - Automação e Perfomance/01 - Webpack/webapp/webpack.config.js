const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const webpack = require('webpack');

const isProductionMode = (filename, extension) => {
    return process.argv[2] === '--mode=production' ? `${filename}.min.${extension}`: `${filename}.${extension}`;
};

module.exports = {
    entry: './app/src/js/app.js',
    output: {
        filename: isProductionMode('bundle','js'),
        path: path.resolve(__dirname, 'app/dist'),
        clean: true
    },
    module:{
        rules: [
            { 
                test: /\.css$/i, 
                use: [MiniCssExtractPlugin.loader, 'css-loader'] 
            }
        ]
    },
    optimization:{
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin(),
            '...'
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ 
            template: './app/src/index.html',
            filename: 'index.html',
            hash: true
        }),
        new MiniCssExtractPlugin({
            filename: isProductionMode('style','css')
        }),
        new webpack.optimize.ModuleConcatenationPlugin()
    ],
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        port: 3000
    }
};