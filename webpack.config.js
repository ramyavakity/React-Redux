const common = require('./webpack/webpack-base.js');
const merge = require('webpack-merge');

module.exports = merge(common, { mode: 'production' });
