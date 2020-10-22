### react props 

- 单个值传递方式
- 多个值传递方式
- 设置props默认值
- 参数数据类型验证
- this.props.children

### project init 

mkdir 12-props 

npm init -y 

mkdir apps && mkdir public 

touch public/index.html

touch apps/index.js

touch apps/props.js

touch webpack.config.js

npm install react react-dom @babel/core @babel/preset-env @babel/preset-react webpack@3.10.0 webpack-cli babel-loader

touch .babelrc 

注意事项:
这里install的是@babel/preset-env, @babel/preset-react, 则在webpack.config.js 和.babelrc 中引用的应该是

presets:["@babel/env","@babel/react"]

### 多个值传递方式

使用JSX的扩展语法来传递属性值,也就是`...`语法

```
return <Commponent{...this.props}more="values" />;
```

### 设置props默认值

app/multi_props 设置defaultProps 后, webpack 编译报酬如下,

```
ERROR in ./apps/multi_props.js
Module build failed: SyntaxError: /Users/lihong/workbench/dev/src/github.com/researchlab/febp/react-practice/13-props/apps/multi_props.js: Support for the experimental syntax 'classProperties' isn't currently enabled (7:24):
```

上述问题 需要安装如下插件

npm i @babel/plugin-proposal-class-properties

并且在.babelrc中配置插件

```
options: {
        plugins: ['@babel/plugin-proposal-class-properties']
      }
 },
 ```

此时当调用MultiProps 没有传值时, 则直接使用默认值;

### 参数数据类型验证

类型检查中 用到

import PropTypes from 'prop-types';

需要安装 npm install prop-types

在ES6中参数数据类型验证方式

```
MyComponent.propTypes = {
  // You can declare that a prop is a specific JS    primitive. By default, these
  // are all optional.
  optionalArray: PropTypes.array,
  optionalBool: PropTypes.bool,
  optionalFunc: PropTypes.func,
  optionalNumber: PropTypes.number,
  optionalObject: PropTypes.object,
  optionalString: PropTypes.string,
  optionalSymbol: PropTypes.symbol,
  ....
  }
```
### this.props.children

表示的是所有子节点的属性

props.js, props_children.js 

### Reference

[10、React系列之--props属性](https://www.jianshu.com/p/fa81cebac3ef)