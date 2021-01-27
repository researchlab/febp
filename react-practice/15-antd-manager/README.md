# 项目构建步骤

安装所需要的插件
1.安装React-Router, Axios 
2.安装AntD
3.暴露webpack配置文件
4.安装less-loader
5.修改less-loader 


1.构建项目
```
create-react-app 15-antd-manager
```

2.启动项目
```
cd 15-antd-manager
yarn start
```

3.删除多余文件

```
.
├── README.md
├── node_modules
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── App.js
│   └── index.js
└── yarn.lock
```

4.安装插件

4.1安装 plugins
```
yarn add react-router-dom axios less-loader less antd
babel 插件  按需加载
yarn add babel-plugin-import 
```

4.2 暴露webpack配置文件
```
yarn eject
```

注意: 
eject 之后，要先rm node_modules, 然后 重新yarn 装node_modules 再yarn start ，否则会报错;


暴露webpack 配置文件之后, 修改 config/webpack.config.js 文件, 注意这里没有webpack.config.dev.js 


具体参考 [react+antd配置less和按需加载](https://blog.csdn.net/banzhuanren1/article/details/101029298?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromBaidu-1.not_use_machine_learn_pai&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromBaidu-1.not_use_machine_learn_pai)

1.在config/webpack.config.js 文件中添加如下代码
```
const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;

const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;

添加如下代码 照葫芦画瓢
const lessRegex = /\.less$/;   
const lessModuleRegex = /\.module\.less$/;

在module/rules下添加  注意层级，不要弄错
            {
              test: lessRegex,
              exclude: lessModuleRegex,
              use: getStyleLoaders(
                  {
                    importLoaders: 2,
                    sourceMap: isEnvProduction && shouldUseSourceMap,
                  },
                  'less-loader'
              ),
              // Don't consider CSS imports dead code even if the
              // containing package claims to have no side effects.
              // Remove this when webpack adds a warning or an error for this.
              // See https://github.com/webpack/webpack/issues/6571
              sideEffects: true,
            },
            // Adds support for CSS Modules, but using SASS
            // using the extension .module.scss or .module.sass
            {
              test: lessModuleRegex,
              use: getStyleLoaders(
                  {
                    importLoaders: 2,
                    sourceMap: isEnvProduction && shouldUseSourceMap,
                    modules: true,
                    getLocalIdent: getCSSModuleLocalIdent,
                  },
                  'less-loader'
              ),
            },
```
2.在package.json中添加以下代码
```
  "babel": {
    "presets": [
      "react-app"
    ],
    "plugins": [
      [
        "import",
        {
          "libraryName": "antd",
          "style": "css"
        }
      ]
    ]
  }
```

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
