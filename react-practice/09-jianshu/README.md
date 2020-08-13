
css文件一旦在一个js文件中引入了， 其它的组件都能用, 所以不建议直接引入css;

yarn add styled-components 样式组件

利用styled-components 设置全局样式组件, 新建一个style.js 文件， 
```js
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body{
        margin:0px;
        padding:0px;
    }
`
```

在需要的页面引入全局样式组件 f
```jsx
import {GlobalStyle} from './style';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```

```js
export const Logo = styled.a.attrs({
    href:'/'
})`
    position: absolute;
    top:0;
    left:0;
    display:block;
    width:100px;
    height:56px;
    background: url(${logoPic});
    background-size: contain;
`
```
可以通过a.attrs 像上面一样传递属性字段; 

https://www.iconfont.cn/


yarn add react-transition-group

```jsx
import { CSSTransition } from 'react-transition-group';
<CSSTransition 
    in={this.state.focused}
    classNames='slide'
    timeout={200}
    >
    <Fragment>
        <NavSearch
        className={this.state.focused ? 'focused':''}
        onFocus = {this.handleInputFocus} //聚焦
        onBlur = {this.handleInputBlur} //失焦
        ></NavSearch><i className={this.state.focused ? 'focused iconfont':'iconfont'}>&#xe614;</i>
    </Fragment>     
    </CSSTransition>        
```
> CSSTransition 下面只能包含一个元素，当包含多个元素时会报如下错误, 此时可以用一个Fragment组件来包含（注意如果用div标签包含可能会影响布局及动画效果), 无副作用;

```diff
-  Error: React.Children.only expected to receive a single React element child.
```

yarn add redux   数据框架

yarn add react-redux  方便在项目中使用redux

facebook 开源的 immutable.js  生成一个 immutable 对象， 即不可改变的对象; 

yarn add immutable 

https://github.com/immutable-js/immutable-js

将state对象 转换为 immutable 对象;

```jsx
import { fromJS } from 'immutable';

// 将defaultState 变成一个immutable 对象, 
// 作用是  不许直接修改state 
const defaultState = fromJS({
    focused: false
});
```

「修改」immutable 对象， 实际是返回一个全新的对象，而不是修改state 对象; 

利用 .set方法进行修改; 
```jsx
export default (state = defaultState, action) =>{
    if (action.type === constants.SEARCH_FOCUS){
        // immutable对象的set方法， 会结合之前的immutable 对象的值 和设置的值
        // 返回一个全新的对象;
        return state.set('focused', true); // immutable 对象 利用set方法来修改; 
        // return {
        //     focused: true
        // };
    }
    if (action.type === constants.SEARCH_BLUR){
        return state.set('focused', false);
        // return { 
        //     focused: false
        // }
    }
    return state;
}
```

读取immutable对象的属性值;

利用.get('属性名')对象对应属性的值; 不能直接用`.属性名`来取值；

```jsx
const mapStateToProps = (state) =>{
    return {
        // focused: state.header.focused
        focused: state.header.get('focused') // immutable 对象 只能通过.get('属性名') 获取属性值; 
    }
}
```

使用 redux-immutable 统一数据格式; 

yarn add redux-immutable

```jsx
import { reducer as headerReducer } from '../common/header/store';

// export default combineReducers({
//     header: headerReducer
// })

// 得到一个immutable对象的state;
// import { combineReducers } from 'redux-immutable';

// 得到一个js对象的state;
// import { combineReducers } from 'redux';

const reducer = combineReducers({
    header: headerReducer
})
```

获取immutable对象值
```jsx
const mapStateToProps = (state) =>{
    return {
        // focused: state.header.focused
        // state 是一个js对象; 通过.获取属性值;
        // state.header 是一个immutable 对象;  通过.get获取属性值;
        // focused: state.header.get('focused') // immutable 对象 只能通过.get('属性名') 获取属性值; 

        // state 变成了一个immutable对象 的使用方式; 
        // focused: state.get('header').get('focused')
        // 等价与下面的.getIn(['header','focused']) 意思是 取header 下面的focused的值; 
        focused: state.getIn(['header','focused'])

    }
}
```

yarn add redux-thunk 

yarn add axios  异步请求; 

通过ref属性获取当前的DOM元素， 从而可以改变其CSS属性;

```jsx
<i ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe606;</i>
```

react 路由使用

yarn add react-router-dom

父元素下的子元素 设置了浮动， 则可以设置父元素的overflow:hidden 属性， 作用是触发父元素的BFC, 使得父元素的高度自动适应子元素的高度;

Component 与 PureComponent 的区别
PureComponent 底层自己实现了一个shouldComponentUpdate 的方法
它自己会判断当store 发生变化时 当前组件是否要重新render 了; 
这样当 store 与 当前组件无关时， 则 不需要重新 render了， 大大提升了组件的性能; 
这个有一个前提 当前框架用了 immutable.js 来管理组件的数据; 
所以建议  PureComponent 与 immutable.js 配合使用; 

当组件中使用了如下connect组件之后，发现组件的match, location,history属性找不到了
```jsx
import { connect } from 'react-redux';
export default connect(mapState, mapDispatch)(Detail);
```
那么可以通过 React-router 提供的withRouter方法将其解构出来， 将代码改成如下即可, 
```diff
import { connect } from 'react-redux';
+ import { withRouter } from 'react-router-dom';
- export default connect(mapState, mapDispatch)(Detail);
+ export default connect(mapState, mapDispatch)(withRouter(Detail));
```

- [React-router中解决match, location和history属性找不到的问题](https://blog.csdn.net/weixin_43080554/article/details/99293319)

##### ReactJS 的5种路由模式

1、BrowserRouter：浏览器的路由方式，也就是在开发中最常使用的路由方式

2、HashRouter：在路径前加入#号成为一个哈希值，Hash模式的好处是，再也不会因为我们刷新而找不到我们的对应路径

3、MemoryRouter：不存储history，所有路由过程保存在内存里，不能进行前进后退，因为地址栏没有发生任何变化

4、NativeRouter：经常配合ReactNative使用，多用于移动端

5、StaticRouter：设置静态路由，需要和后台服务器配合设置，比如设置服务端渲染时使用


##### React 路由三种传参方式，一个注意事项

方式一: 动态路由
```jsx
通过params
    1.路由表中      
          <Route path=' /sort/:id '  component={Sort}></Route>　　　　　　　
    2.Link处        
      HTML方式
             <Link to={ ' /sort/ ' + ' 2 ' }  activeClassName='active'>XXXX</Link> 　　　　　
      JS方式
            this.props.history.push(  '/sort/'+'2'  )
    3.Sort页面       
           通过  this.props.match.params.id  就可以接受到传递过来的参数（id）
    4.请求转发
           axios.get('/api/detail.json?id='+id)
```
> 通过设置link的path属性，进行路由的传参，当点击link标签的时候，会在上方的url地址中显示传递的整个url

> 因为传参能够被用户看见，传递获取比较麻烦，所以不推荐


方式二: query 传参
```jsx
通过query
        前提：必须由其他页面跳过来，参数才会被传递过来
        注：不需要配置路由表。路由表中的内容照常：<Route path='/sort' component={Sort}></Route>
    1.Link处      
      HTML方式
        <Link to={{ path : ' /sort ' , query : { name : 'sunny' }}}>
      JS方式
        this.props.history.push({ path : '/sort' ,query : { name: ' sunny'} })
    2.sort页面     
          this.props.location.query.name
```
>


方式三: state 传参 
```jsx
通过state
        同query差不多，只是属性不一样，而且state传的参数是加密的，query传的参数是公开的，在地址栏
    1.Link 处      
      HTML方式：
            <Link to={{ path : ' /sort ' , state : { name : 'sunny' }}}> 
                            　　
      JS方式：
        this.props.history.push({ pathname:'/sort',state:{name : 'sunny' } })
                          　　  
    2.sort页面       
        this.props.location.state.name
```
> state传参为隐式路由传参, 传参信息不暴露在url中;

> 推荐使用，比较安全，获取传递参数都比较方便;

一个注意事项

想要在某个子组件中获取路由的参数，必须得使用路由中的route标签的子组件才能被绑定上路由的参数。

为了解决不通过route标签绑定的子组件获取路由参数的问题，需要使用withRouter

参考 [React-router中解决match, location和history属性找不到的问题](https://blog.csdn.net/weixin_43080554/article/details/99293319)

##### 异步组件

[react-loadable](https://github.com/jamiebuilds/react-loadable)

异步组件可以实现按需加载页面js, 如打开首页时只加载首页相关的js;

yarn add react-loadable

前端打包

npm run build 

