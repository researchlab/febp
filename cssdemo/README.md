
##### 深入理解CSS overflow:hidden
三个主要作用
- 溢出;
- 坍塌;
- 清除浮动

- link: [深入理解CSS overflow:hidden](https://www.jb51.net/css/629476.html)

##### 深入理解CSS line-height 

height指的是块级别元素的高度,line-height指的是元素内容的高度.

当line-height的值和height的值相同的时候,元素会自动上下居中,一般常用于文字中.
```css
<divstyle="height:120px;"> 是用来规定整个div的高度，文字还是默认会在顶端开始向下排列
<div style="line-height:120px;"> 是规定行高的，就是一行120个像素，文字会相对于这120像素垂直居中
```

- link: [css中的line-height](https://segmentfault.com/a/1190000003038583)

##### CSS中box-sizing: border-box;的作用

设置 box-sizing: border-box; 后， 可以理解为 height =  content-height + padding + border 

- [CSS中box-sizing: border-box;的作用](https://blog.csdn.net/lengyue1084/article/details/82191095)

- [box-sizing:border-box;的一些坑](https://blog.csdn.net/zhuhaomingoo/article/details/54729822?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1.channel_param&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1.channel_param)

- [border-box和content-box最直观的区别和解释【不理解包赔】](https://blog.csdn.net/AndyNikolas/article/details/79169798?utm_medium=distribute.pc_relevant_t0.none-task-blog-BlogCommendFromMachineLearnPai2-1.channel_param&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-BlogCommendFromMachineLearnPai2-1.channel_param)

- [css3属性box-sizing:border-box 用法解析](https://www.cnblogs.com/xinjianheyi/p/6552695.html)