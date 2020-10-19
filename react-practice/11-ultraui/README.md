
## 01 init react 
    ### project init 
    ```
    yarn init -y 
    
    mkdir public && mkdir src 
    
    mkdir src/apps && mkdir src/apps/hello
    
    touch public/index.html, touch src/index.js, touch src/apps/hello/hello.js
    
    ```
    
    ### hello world (react)
    
    编写 public/index.html, src/index.js, src/apps/hello/hello.js 
    
    
    ### webpack
    
    编写webpack.config.js, .babelrc , package.json 
    
    yarn add  react react-dom @babel/core babel-loader@8.1.0 @babel/preset-env @babel/preset-react
    
    yarn add  webpack@3.10.0  webpack-dev-server@2.9.7 webpack-cli 
    
    ### build  && run 
    yarn run build 
    
    yarn run dev

## 02 ultraui 

    ### init ultraui 
    yarn add react-intl react-redux react-router-dom redux url-loader file-loader
    
    yarn add @huayun/ultraui
    
    touch apps/button/button.js 
    
    ### webpack 
    
    yarn add css-loader@3.3.0 style-loader@1.0.0 less@3.12.0  less-loader@5.0.0
    
    更新webpack.config.js 
    
    ```
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
    ```
    
    ### build && run 
    
    yarn run build 
    
    yarn run dev 