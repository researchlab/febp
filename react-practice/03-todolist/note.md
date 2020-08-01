
create-react-app 03-todolist 

yarn.lock  项目依赖安装包

package.json  node的包版本记录文件


public 目录
    favicon.ico 浏览器栏上的图标;

    index.html 项目首页的页面模板; 

    manifest.json 文件 这是一个Web App Manifest，它描述了你的应用程序，它被例如手机如果快捷方式添加到主屏幕。

src目录

    index.js 所有源代码的入口文件; 

react 设计理念:all in js , 可以在js中引入css ； 


import xx from xx 是 es6 的模块引入语法 

pwa  progressive web application 

import * as serviceWorker from './serviceWorker';

serviceWorker.unregister(); 

serviceWorker.register();

https:协议的服务器上， 第一次需要联网才能用 如果此后断网了， 依然可以看到之前网页的内容， 

serviceWork 它会把你的网页内容存储再本地; 

//JSX语法, 使用自定义创建的组件 , 组件标签必须以大写字母开头;  小写字母开头的标签一般是h5的原始标签;
import App from './App';

```jsx
ReactDOM.render(
  <React.StrictMode>
    <App />   
  </React.StrictMode>,
  document.getElementById('root')
);
```