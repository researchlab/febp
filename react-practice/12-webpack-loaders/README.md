npm init -y  # 初始化 package.json 

mkdir app && mkdir public 

编写 helloworld.js, main.js, index.html 

编写webapack.config.js 
```
const path = require('path');

module.exports = {
    entry: "./app/main.js",
    output:{
        path: path.resolve(__dirname, 'public'),
        filename: "bundle.js"
    }
}
```

编写 package.json 
```
"scripts":{
    "start":"webpack --mode development",
    "run":"webpack --mode production"
  }
```

执行 npm start 生成bundle.js 

npm install webpack@3.10.0  webpack-dev-server@2.9.7 webpack-cli 

```
"dependencies": {
    "webpack": "^3.10.0",
    "webpack-dev-server": "^2.9.7"
  },
  "devDependencies": {
    "webpack-cli": "^4.0.0"
  }
```
编写webpack.config.js 
```
devServer:{
        contentBase: path.join(__dirname, 'public')
    }
```

npm install react react-dom babel-core@7 babel-loader babel-preset-es2015 babel-preset-react 

编写webpack.config.js 

```
module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:[{
                    loader:'babel-loader',
                    options:{
                        presets:['es2015','react']
                    }
                }]
            }
        ]
    }
```

编写.babelrc 

```
{
    "presets":["react","es2015"]
}
```

npm run dev

npm install style-loader css-loader 

编写webpack.config.js 

```
{
                test:/\.css$/,
                use:['style-loader','css-loader']
}
```
编写app/style.css 

编写helloworld.js 


webpack 打包时，会出现如下错误，并卡住,
```
xxx.getresolve is not a function 
```
主要是因为css-loader , style-loader , less, less-loader版本过高 编译会卡住,

npm uninstall css-loader style-loader less less-loader 

npm install css-loader@3.3.0 style-loader@1.0.0 less@3.12.0  less-loader@5.0.0

helloworld.js 引入 import './button.less';

npm run dev 


[08、React系列之--使用webpack管理](https://www.jianshu.com/p/732c4d501668)