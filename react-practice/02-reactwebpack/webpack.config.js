module.exports = {
    entry: __dirname + "/app/main.js",
    output:{
        path:__dirname + "/public",
        filename: "bundle.js"
    },
    mode: "development",
    devServer:{
        contentBase: "./public",
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                loader:'babel-loader',
                query:{
                    presets:['env','react']
                }
            },
            {
                test:/\.css$/,
                use:[
                    {loader:'style-loader'},
                    {
                        loader: 'css-loader',
                        options:{
                            modules:true
                        }
                    }
                ]
            }
        ]
    }
}