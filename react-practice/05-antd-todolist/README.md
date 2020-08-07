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

yarn add redux 

Redux 设计和使用的三原则

- store 是唯一的; 
- 只有store能够改变自己的内容;
- Reducer 必须是纯函数;

> 纯函数指的是，给定固定的输入，就一定会有固定的输出，不会有任何副作用; 

所以reducer 中不能有任何ajax操作，异步操作，time操作; 
下面这个包含了Date() 所以 固定的输入(state, action) 不会有固定的输出， 
所以不是纯函数，所以不能作为reducer函数使用; 
```jsx
export default (state = defaultState, action)=> {
    if(action.type === CHANGE_INPUT_VALUE){
        // deep copy
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = Date();
        return newState;
    }
}
```
Redux 使用流程 

- createStore  创建 共用数据存储store
- store.dispatch   分发action 
- store.getState   获取store中所有的数据
- store.subscribe  订阅store中数据， 当数据变更后 会自动触发订阅函数;

为什么style 中要用双层大括号{{}}

```jsx
render(){
        return(
            <div style={{ marginTop:'10px', marginLeft:'10px'}}>
        )
}
```

react组件jsx，行内style固定写法就是双花括号   

①外层花括号：因为React使用的是JSX语法，JSX语法中嵌入任何js变量、表达式、对象都要用花括号{}扩起来，
②内层花括号：JSX如果用到行内CSS style样式时，这个行内样式必须是一个js对象，即{background:'theme.background'}是一个对象所以用花括号扩起来。
