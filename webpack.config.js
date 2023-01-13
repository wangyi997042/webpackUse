const path = require('path');
const webpack = require('webpack'); //访问内置的插件
const HtmlWebpackPlugin = require('html-webpack-plugin');

const configs = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    resolve: {
        // This allows you to set a fallback for where webpack should look for modules.
        // We placed these paths second because we want `node_modules` to "win"
        // if there are any conflicts. This matches Node resolution mechanism.
        // https://github.com/facebook/create-react-app/issues/253
        fallback: {
            "path": false,
            "assert": false,
            "stream": false,
            "constants": false,
            "util": false,
            "fs": false,
            "zlib": false,
            "crypto": false,
            "https": false,
            "http": false,
            "url": false,
            "buffer": false,
            "vm": false,
            "querystring": false,
            "module": false,
            "os": false,
            "tty": false,
            "worker_threads": false,
            "child_process": false,
            "tty": false,
            "console": false,
            "@swc/core": false,
            "esbuild": false,

        },
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {},
                    },
                ],
            },
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './index.html' }),
        new webpack.BannerPlugin({
            banner: 'hello world',
        })
    ]
}

module.exports = ({ env }) => {
    return configs;
}