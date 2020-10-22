const path = require('path');

module.exports={
    entry: './apps/index.js',
    output:{
        path: path.resolve(__dirname,'public'),
        filename: 'bundle.js'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude: /node_modules/,
                use:[
                    {
                        loader:'babel-loader',
                        options:{
                            presets:['@babel/env','@babel/react']
                        }
                    }
                ]
            }
        ]
    }
}