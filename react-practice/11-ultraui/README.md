
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