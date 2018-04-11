const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const ExtractPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './public'
    },
    plugins: [
        new ExtractPlugin(
            'asset/styles/styles.css'
        )        
    ],
    module: {
        rules: [
            {
                test: /\.less$/,
                exclude: /node_modules/,
                use: ExtractPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                camelCase: true,
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: () => autoprefixer({
                                    browsers: ['last 3 versions', '> 1%']  
                                })
                            }
                        },
                        {
                            loader: 'less-loader'
                        }
                    ],
                    publicPath: '../../'
                })
            },
            {
                test: /\.(png|jpg|svg|gif)/,
                exclude: [/node_modules/, /project-.*\.(png|jpg|svg|gif)/, /-icon.*\.(png|jpg|svg|gif)/, /-bg.*\.(png|jpg|svg|gif)/],
                use: ['file-loader?name=./assets/images/[hash].[ext]']
            },
            {
                test: /project-.*\.(png|jpg|svg|gif)/,
                exclude: /node_modules/,
                use: ['file-loader?name=./assets/images/projects/[hash].project.[ext]']
            },
            {
                test: /-icon.*\.(png|jpg|svg|gif)/,
                exclude: /node_modules/,
                use: ['file-loader?name=./assets/images/icons/[hash].icon.[ext]']
            },
            {
                test: /-bg.*\.(png|jpg|svg|gif)/,
                exclude: /node_modules/,
                use: ['file-loader?name=./assets/images/bg/[hash].background.[ext]']
            }          
        ]
    } 
});