const path = require('path');
const srcPath = path.join(__dirname, '../src/');
const distPath = path.join(__dirname, '../public/');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

console.log('srcPath,distPath', srcPath, distPath);

module.exports = {
    target: 'web',
    entry: {
        'main': [path.join(srcPath, 'Main')]
    },

    output: {
        path: distPath,
        publicPath: '/',
        filename: 'scripts/[name]-bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.css(\?.*$|$)/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            },
            {
                test: /\.(eot|eot|svg|ttf|woff|woff2)(\?.*$|$)/,
                use: {
                    loader: 'file-loader',
                    query: {
                        name: 'fonts/[name].[ext]',
                        publicPath: '../'
                    }
                }

            },
            {
                test: /\.(jpe?g|png|gif)(\?.*$|$)/,
                use: {
                    loader: 'file-loader',
                    query: {
                        name: 'images/[name].[ext]',
                        publicPath: '../'
                    }
                }
            },
            {
                test: /\.js(\?.*$|$)/,
                use: ['babel-loader'],
                include: srcPath,
                exclude: '/node_modules/'
            }
        ]
    },

    plugins: [
        new MiniCssExtractPlugin({ filename: "styles/[name]-bundle.css" })
    ],

    mode: 'development'

}