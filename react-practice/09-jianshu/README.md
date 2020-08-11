
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