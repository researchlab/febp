## CSS 页面布局

![layout](./layout.png)

##### 单列布局
1.header, content 和 footer等宽

> 先通过对 header,content,footer 统一设置 width：1000px;或者 max-width：1000px(这两者的区别是当屏幕小于 1000px 时，前者会出现滚动条，后者则不会，显示出实际宽度);然后设置 margin:auto 实现居中即可得到。

- [1-column-layout01](./1-column-layout01.html)

2.header, footer 等宽, content略窄
  
> header、footer 的内容宽度不设置，块级元素充满整个屏幕，但 header、content 和 footer 的内容区设置同一个 width，并通过 margin:auto 实现居中。

- [1-column-layout02](./1-column-layout02.html)

##### 两列自适应布局
两列自适应布局是指一列由内容撑开，另一列撑满剩余宽度的布局方式

1.float+overflow:hidden

> 如果是普通的两列布局，浮动+普通元素的margin便可以实现，但如果是自适应的两列布局，利用float+overflow:hidden便可以实现，这种办法主要通过 overflow 触发 BFC,而 BFC 不会重叠浮动元素。

> 由于设置 overflow:hidden 并不会触发 IE6-浏览器的 haslayout 属性，所以需要设置 zoom:1 来兼容 IE6-浏览器。

> 如果侧边栏在右边时，注意渲染顺序。即在HTML中，先写侧边栏后写主内容

- [2-column-float](./2-column-float.html)

2.Flexbox 布局

- [2-column-flex](./2-column-flex.html)

3.Grid 布局

- [2-column-grid](./2-column-grid.html)

link 
- [CSS 网格布局](https://www.cssjs.cn/doc/7/134.html)
