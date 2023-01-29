const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const webpack = require('webpack');

const isProductionMode = (filename, extension) => {
    return process.argv[2] === '--mode=production' ? `${filename}.min.${extension}`: `${filename}.${extension}`;
};

module.exports = {
    entry: {
        busca: { import: './src/site/assets/js/busca.js', filename: 'assets/js/[name].js' },
        detect: { import: './src/site/assets/js/detect.js', filename: 'assets/js/[name].js' },
        footer: { import: './src/site/assets/js/footer.js', filename: 'assets/js/[name].js' },
        home: { import: './src/site/assets/js/home.js', filename: 'assets/js/[name].js' },
        jquery: { import: './src/site/assets/js/jquery.js', filename: 'assets/js/[name].js' },
        menu: { import: './src/site/assets/js/menu.js',filename: 'assets/js/[name].js' },
        svg4everybody: { import: './src/site/assets/js/svg4everybody.js', filename: 'assets/js/[name].js' },
        video: { import: './src/site/assets/js/video.js', filename: 'assets/js/[name].js' }
    },
    output: {
        path: path.resolve(__dirname, './src/dist'),
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
            template: './src/site/index.html',
            filename: 'index.html',
            hash: true
        }),
        new MiniCssExtractPlugin({
            filename: `assets/css/${isProductionMode('style', 'css')}`,
        }),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new CopyPlugin({
            patterns: [
                { from: './src/site/assets/img', to: 'assets/img' },
                { from: './src/site/assets/font', to: 'assets/font' },
            ]
        })
    ],
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        port: 3000
    }
};