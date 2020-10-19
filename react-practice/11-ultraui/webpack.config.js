const path = require('path');

module.exports = {
    entry: './src/index.js',
    output:{
        path: path.resolve(__dirname, "public"),
        filename: "bundle.js"
    },
    devServer:{
        contentBase: path.join(__dirname, "public")
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:[{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/env','@babel/react']
                    }
                }]
            },
            {
                test:/\.(less|css)$/,
                use:['style-loader','css-loader','less-loader']
            },
            {
                test: /\.(tmpl)(\?.+)?$/,
                exclude: /favicon\.png$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: 'assets/[name].[ext]'
                    }
                }]
            },
            {
                test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
                exclude: /favicon\.png$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 100,
                        name: 'assets/[name].[ext]'
                    }
                }]
            }
        ]
    }
}