const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {

    entry: './Frontend/app.js',
    output: {
        path: path.join(__dirname, 'Backend/public/uploads'),
        filename: 'bundle.js'
    },

    module: {
        rules:[
            {
                test: /\.css/,
                use:[
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
        
        }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './Frontend/index.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            }
        }),

        new MiniCssExtractPlugin({
            filename: 'bundle.css'
        })

    ],

    devtool: 'source-map'
};