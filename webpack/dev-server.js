const express = require("express");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");
const webpackConfig = require('./webpack-hot.js');
const compiler = webpack(webpackConfig);
const path = require('path');
const http = require('http');
const app = express();
const url = require('url');
const pug = require('pug');
// const indexTemplate = pug.compileFile(path.join(__dirname, './web/root/index.pug'));
const { PORT = 3000 } = process.env;

const middlewareOptions = {
    stats: { colors: true },
    noInfo: false,
    lazy: false,
    headers: {
        "Access-Control-Allow-Origin": "*"
    },
    hot: true,
    publicPath: webpackConfig.output.publicPath
};

app.use(webpackDevMiddleware(compiler, middlewareOptions));
app.use(webpackHotMiddleware(compiler));

// app.get('/', (req, res) => {
//     res.send(indexTemplate({ pageData: `var data = ${JSON.stringify(data)}` }))
// });

app.use(express.static(path.join(__dirname, '../public')));

app.listen(PORT);
console.log(`Ramya Vakity is listening at http://localhost:${PORT}`);
