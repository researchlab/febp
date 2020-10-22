const path = require('path');

module.exports = {
    entry: "./app/main.js",
    output:{
        path: path.resolve(__dirname, "public"),
        filename: "bundle.js"
    },
    devServer:{
        contentBase: path.join(__dirname, 'public')
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:[
                    {
                        loader:'babel-loader',
                        options:{
                            "presets":["@babel/env","@babel/react"]
                        }
                    }
                ]
            }
        ]
    }
}