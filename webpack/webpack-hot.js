const path = require('path');
const webpack = require('webpack');
const common = require('./webpack-base');
const rules = common.module.rules.filter(rule => String(rule.test) !== String(/\.css(\?.*$|$)/));

delete common.entry;

delete common.plugins;

module.exports = Object.assign({}, common, {
    entry: {
        'main': ['react-hot-loader/patch', 'webpack-hot-middleware/client', '@babel/polyfill', path.join(__dirname, 'hot-main')]
    },
    module: {
        rules: rules.concat([
            {
                test: /\.css(\?.*$|$)/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            { test: /\.js(\?.*$|$)/, use: ['babel-loader'], include: __dirname, exclude: '/node_modules' }
        ])
    },

    plugins: [

        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],

    devtool: 'source-map'
});