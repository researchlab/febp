## html 常用知识点总结

##### 1.**`<span> 标签`**

这个标签是`没有语义`的，它的`作用就是为了设置单独的样式`用的。

##### 2.<strong>`<div> 标签`</strong>

在网页制作过程过中，可以把一些独立的逻辑部分划分出来，放在一个`<div>标签`中，这个`<div>标签`的作用就相当于一个容器。

##### 3.`<section>标签`

`<div>`将内容分为块或者包裹任意内容的时候用。语义化不是很明显（就是使用的界限不是很明显，很多场合都适用）`<section>: `将块的内容分成节的时候用，通常 `section` 里面是包含 `h 标题`和`内容结构`的。而且`<div> `和` <section>`通常是嵌套使用。

##### 4.`空格`

要想输入空格，必须写入`&nbsp;`

##### 5.`列表`

使用<ul><li>标签实现无序列表,使用<ol><li>标签实现有序列表

##### 6.`img标签`

<img src="图片地址" alt="下载失败时的替换文本" title = "提示文本”>

讲解：

-  src：标识图像的位置；

- alt：指定图像的描述性文本，当图像不可见时（下载不成功时），可看到该属性指定的文本；

- title：提供在图像可见时对图像的描述(鼠标滑过图片时显示的文本)；

- 图像可以是GIF，PNG，JPEG格式的图像文件。

##### 7.`表格table`

创建表格的四个元素：table、tr、th、td

- ` <table>…</table>`：整个表格以<table>标记开始、</table>标记结束。

- `<tr>…</tr>`：表格的一行，所以有几对tr 表格就有几行。

- `<td>…</td>`：表格的一个单元格，一行中包含几对<td>...</td>，说明一行中就有几列。

- `<th>…</th>`：表格的头部的一个单元格，表格表头。

- 表格中列的个数，取决于一行中数据单元格的个数。

- border属性可以为表格添加边框，属性值为数字。

注意：

- table标签用来定义整个表格，为双标签，必须有结束标签。

- table标签里面可以放caption标签和tr标签。

- caption标签用来定义表格的标题。

- tr标签用来设置表格的行，tr里面只能放th或者td标签，一组tr标签代表一行。

- th用来设置表格的标题，会加粗居中显示。也就是th标签中的文本默认为粗体并且居中显示。

- td用来设置表格的列，一组td标签代表一列。

- table表格在没有添加border属性之前, 在浏览器中显示是没有表格线的。

- <thead>标签定义表格头部,<tbody>标签来定义表格的内容,<tfoot>来定义表格的底部, 

> 如果不加<thead><tbody><tfooter> , table表格加载完后才显示。加上这些表格结构， tbody包含行的内容下载完优先显示，不必等待表格完全加载结束后再显示，同时如果表格很长，用tbody分段，可以一部分一部分地显示。（通俗理解table 可以按结构一块块的显示，不在等整个表格加载完后显示。）

##### 8.`数据交互`

网站怎样与用户进行交互？答案是使用HTML表单(form)。表单是可以把浏览者输入的数据传送到服务器端，这样服务器端程序就可以处理表单传过来的数据。

语法：

```html
<form  method="传送方式"  action="服务器文件">
```

讲解：

- `<form>...<form>`标签是成对出现的，以<form>开始，以</form>结束。

- action: 浏览者输入的数据被传送到的地方,比如一个PHP页面(save.php)。

- method: 数据传送的方式（get/post）。

注意:

- 所有表单控件（文本框、文本域、按钮、单选框、复选框等）都必须放在 <form></form> 标签之间（否则用户输入的信息可提交不到服务器上哦！）。

- method : post/get 的区别这一部分内容属于后端程序员考虑的问题。感兴趣的小伙伴可以查看本小节的 wiki，里面有详细介绍。

##### 9.`input标签`

- type=number

     1、input的type属性设置为number,则表示该输入框的类型为数字。

     2、数字框只能输入数字，输入其他字符无效。

- type=url

     1、input的type属性设置为url,则表示该输入框的类型为网址。

     2、数字框的值需以http://或者https://开头,且后面必须有内容,否则表单提交的时候会报错误提示。

- type=email

     1、Input的type属性设置为email,则表示该输入框的类型为邮箱。

     2、数字框的值必须包含@。

     3、数字框的值@之后必须有内容,否则会报错误提示。

##### 10.`label标签`

label标签不会向用户呈现任何特殊效果，它的作用是为鼠标用户改进了可用性。如果你在 label 标签内点击文本，就会触发此控件。当用户单击选中该label标签时，浏览器就会自动将焦点转到和标签相关的表单控件上（就自动选中和该label标签相关连的表单控件上）。

语法：

```html
<label for="控件id名称">
```

注意：标签的 for 属性中的值应当与相关控件的 id 属性值一定要相同。

例子：

```html
<form>
	<label for="email">输入你的邮箱地址</label>
  <input type="email" id="email" placeholder="Enter email">
</form>
```

##### 11.`选择标签`

在使用表单设计调查表时，为了减少用户的操作，使用选择框是一个好主意，html中有两种选择框，即单选框和复选框，两者的区别是单选框中的选项用户只能选择一项，而复选框中用户可以任意选择多项，甚至全选。请看下面的例子:

语法：

```html
<input  type="radio/checkbox"  value="值"  name="名称"  checked="checked"/>
```

- type:

    当 type="radio" 时，控件为单选框

    当 type="checkbox" 时，控件为复选框

- value：提交数据到服务器的值（后台程序使用）

- name：为控件命名，以备后台程序 使用

- checked：当设置 checked="checked" 时，该选项被默认选中

   ```html
 <form action="save.php" method="post">
		<label>性别:</label>
    <label>男</label>
		<input type="radio" value="1" name="gender" />
		<label>女</label>
		<input type="radio" value="2" name="gender" />
		<input type="checkbox" value="3" name="num1"/>
		<input type="checkbox" value="2" name="num2" checked="checked"/>
</form>
   ```

form 标签中  type=submit 提交 , type=reset 重置 才有效; 

提交按钮有两个方式

```html
<button type="submit" />
<input type="submit" />
```

##### 12.`下拉列表`

使用select、option标签创建下拉菜单，select标签里面只能放option标签，表示下拉列表的选项。

- option标签放选项内容，不放置其他标签。

- value： 向服务器提交的值

```html
<select >
		<option value="看书">看书</option>
		<option value="旅游">旅游</option>
		<option value="运动">运动</option>
		<option value="购物" selected="selected">购物</option>
</select>
```

- selected="selected"：

设置selected="selected"属性，则该选项就被默认选中

##### 13.`HTML 重要属性`

```html
a[href,target]
img[src,alt]
table td[colspan,rowspan]
form[target,method,enctype]
input[type,value]
button[type]
select>option[value]
label[for]
```

##### 14.`清楚默认样式`

浏览器存在默认样式 解决方案有两个  

1.使用css reset 库， 比如 npm install normalize.css

2.手工在index.html 页面style 中加入一下样式， 因为是*， 所以会存在点点性能损耗;

```html
*{
  margin:0;
  padding:0;
}
```

##### 参考网址

网页大纲

[http://h5o.github.io](http://h5o.github.io/)

规范检查

[validator.w3c.org/check](http://validator.w3c.org/check)

元素嵌套归纳

http://jkorpela.fi/html/nesting.html


