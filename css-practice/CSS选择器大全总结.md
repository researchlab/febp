##### CSS 选择器大全总结

CSS选择器太多，下面是常见的容易混淆的选择器列表

**element,element**

```diff
+ 示例: div,p	
+ 说明: 选择所有 <div> 元素和所有 <p> 元素。	
```

**element element**	

```diff
+ 示例: div p	
+ 说明: 选择 <div> 元素内部的所有 <p> 元素。	
```

**element>element**

```diff	
+ 示例: div>p	
+ 说明: 选择父元素为 <div> 元素的所有 <p> 元素。	
```
**element+element**	

```diff
+ 示例: div+p	
+ 说明: 选择紧接在 <div> 元素之后的所有 <p> 元素。
```	

link:

1. [CSS 选择器参考手册](https://www.w3school.com.cn/cssref/css_selectors.asp)

2. [CSS 选择器大全](https://www.cnblogs.com/ssjd/p/12894389.html)