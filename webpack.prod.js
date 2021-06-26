const {merge} = require('webpack-merge')
const common = require('./webpack.common')
const miniCssExtractPlugin = require('mini-css-extract-plugin')
const cssOptimizePlugin = require('optimize-css-assets-webpack-plugin')
const terserWebpackPlugin =require('terser-webpack-plugin')

module.exports = merge(common, {
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: miniCssExtractPlugin.loader
                    },
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                ident: 'postcss',
                                plugins: [
                                    require('autoprefixer')(),
                                ]
                            }
                        }
                    },
                    "sass-loader",
                ]
            }
        ]
    },
    plugins: [
        new miniCssExtractPlugin({
            filename: 'css/[name]-[contenthash].css'
        })
    ],
    optimization:{
        minimizer: [new cssOptimizePlugin(), new terserWebpackPlugin({parallel: true})]
    }
})