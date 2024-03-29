const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const  MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: 'dist/'
    },
    mode: 'none',
    module: {
        rules: [
            {
                test: /\.(png|jpg|jpeg)$/,
                type: 'asset/resource',
                parser: {
                    // less than 3 kb asset/inline else asset/resource
                    defaultUrlCondition: {
                        maxSize: 3 * 1024 // 3 kb
                    }
                }
            },
            {
                test: /\.txt/,
                type: 'asset/source'
            },
            {
                test: /\.css$/,
                // use: [
                //     'style-loader', 'css-loader'
                // ]
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                // use: [
                //     'style-loader', 'css-loader', 'sass-loader'
                // ]
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_mocules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env']
                    }
                }
            }
        ]
    },
    plugins: [
        new TerserPlugin(),
        new MiniCssExtractPlugin({
            filename: 'style.css',
        })
    ]
} 