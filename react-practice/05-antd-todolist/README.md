yarn add webpack webpack-cli webpack-dev-server  react react-dom  babel-loader@7 babel-core babel-preset-env babel-preset-react

yarn add axios 

yarn add antd

yarn add style-loader css-loader

引入antd css不生效， 解决方案

1.不需要安装babel-plugin-import 插件
```
yarn add babel-plugin-import 

{
    test:/\.(js|jsx)$/,
    exclude:/node_modules/,
    loader:'babel-loader',
    query:{
        presets:['env','react'],
        plugins:[
                    ['import',{libraryName:'antd', style:'css'}]
                ]
        }
    }
```
上面不需要设置
```
plugins:[
            ['import',{libraryName:'antd', style:'css'}]
        ]
```

2.不要在antd的css上用css modules

```
{
    test:/\.css$/,
    use:[
        {loader:'style-loader'},
        {
            loader: 'css-loader',
            options:{
                modules:false
            }
        }
    ]
}
```
> 注意上面的modules 要设置为false, 或者不要设置上面的modules;

