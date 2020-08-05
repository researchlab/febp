## react css动画效果

react 过渡动画

```css
transition: all 1s ease-in
```

自定义动画

```css
@keyframes show-item{
    0% {
        opacity: 0;
        color:red;
    }
    50%{
        opacity: 0.5;
        color:green;
    }
    100%{
        opacity: 1;
        color:blue;
    }
}

.show{
    animation: show-item 2s ease-in forwards;
}
```
```
定义 @keyframes 变量名{}
引用方式
.show{
    animation: 变量名  时间  动画函数 动画属性
}
```

使用react-transition-group 实现动画
> https://github.com/reactjs/react-transition-group
> yarn add react-transition-group

```jsx
<CSSTransition
    in={this.state.show}
    timeout={1000} /* 1s */
    classNames='fade'
    unmountOnExit
    onEntered={(el)=>{el.style.color='orange'}}
    appear={true}
>
<div>world</div>
</CSSTransition>
```
- in 需要传递一个状态变量，用于改变状态的提示;
- timeout  动画时长 单位ms
- classNames 用于设置动画类名;
- unmountOnExit 钩子函数 用于出场动画结束后移除当前组件;
- onEntered 钩子函数  用于入场动画结束后的设置, 这个钩子函数接收一个箭头函数, 剪头函数接收一个el参数， 这个el参数指当前被CSSTransition包裹的DOM元素，这里就是指被包裹的div元素;
- appear 设置第一打开页面时 也会添加动画，涉及的动画css类事 .类名-appear, .类名-appear-active

给一组DOM元素设置动画

```jsx
<TransitionGroup>
{
    this.state.list.map((item,index)=>{
        return (
            <CSSTransition
                timeout={1000} /* 1s */
                classNames='fade'
                unmountOnExit
                onEntered={(el)=>{el.style.color='orange'}}
                appear={true}
                key={index}
            >
            <div>item</div>
            </CSSTransition>
        )
    })
}
</TransitionGroup>
```
- 给一组DOM元素添加动画 使用`<TransitionGroup></TransitionGroup>`组件;
- 同时里面的每个DOM元素还需要设置`<CSSTransition></CSSTransition>`组件; 
- 因为事给多个DOM元素设置动画，所以`<CSSTransition></CSSTransition>`组件中的`in`参数就不需要设置了; 
- React 对多个元素展示 要求设置key值，因为key要放在最外层的元素上， 所以这里就在`<CSSTransition></CSSTransition>` 组件上放着了`key={index}`的索引;
