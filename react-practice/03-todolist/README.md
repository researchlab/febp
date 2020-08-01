
create-react-app 03-todolist 

##### React 项目结构

yarn.lock  项目依赖安装包

package.json  node的包版本记录文件


public 目录
- favicon.ico 浏览器栏上的图标;
- index.html 项目首页的页面模板; 
- manifest.json 文件 这是一个Web App Manifest，它描述了你的应用程序，它被例如手机如- 果快捷方式添加到主屏幕。

src目录
- index.js 所有源代码的入口文件; 

> react 设计理念:all in js , 可以在js中引入css ； 

> import xx from xx 是 es6 的模块引入语法 

pwa  progressive web application 

```jsx
import * as serviceWorker from './serviceWorker';

serviceWorker.unregister(); 

serviceWorker.register(); //serviceWork它会把你的网页内容存储再本地;
```
https:协议的服务器上， 第一次需要联网才能用 如果此后断网了， 依然可以看到之前网页的内容， 因为serviceWork它会把你的网页内容存储再本地; 

##### JSX语法
//JSX语法, 使用自定义创建的组件 , 组件标签必须以大写字母开头;  小写字母开头的标签一般是h5的原始标签;

```jsx
import App from './App';
ReactDOM.render(
  <React.StrictMode>
    <App />   
  </React.StrictMode>,
  document.getElementById('root')
);
```
##### TodoList 组件
todolist.js 
1. 语法特性
```jsx
<label htmlFor="content">输入内容</label>
<input id="content" className='input' />
```
> 规避jsx语法语义歧义， react中 for 换成htmlFor, class 换成className;

2. 根元素与Fragment组件

JSX要求 所有元素要包含在一个根元素中, 一般情况下会在最外层包一个`<div></div>`, 但是div 会显示在html中，可能会影响布局(如display:flex)， 如果不想在html中显示这个div，则可以使用React16 提供的占位符组件 Fragment, 在html是不显示的;

```jsx
class TodoList extends Component {
    render() {
        return (
            < Fragment >
               <div></div>
               <div>
                <ul>
                    <li></li>
                </ul>
               </div>
            </Fragment >
        );
    }
}
```
3. 数据变量

React 是通过改变状态来修改数据的， 组件中的数据变量都是声明在constructor构造函数中, 

```jsx
constructor(props) {
        super(props);
        // react 将数据定义在状态中; 
        this.state = {
            inputValue: '',
            list: []
        }
    }
```
> 改变数据， 必须调用this.setState() 来修改数据; 

4. 父组件与子组件相互通信
- 父组件传值(变量，函数等)给子组件;
  TodoList 向TodoItem 传递变量(content,index) 和函数(handleItemDelete)
 ```jsx
 class TodoList extends Component {
    // 2.定义数据
    constructor(props) {
        super(props);
        // react 将数据定义在状态中; 
        this.state = {
            inputValue: '',
            list: []
        }
        // 优化
        // 强制绑定父组件的this;
        this.handleItemDelete = this.handleItemDelete.bind(this); 
    }
    render() {
        return (
            < Fragment >
               <ul>
                    {this.getTodoItem()}
                </ul>
            </Fragment >
        );
    }

    // 优化4 
    getTodoItem() {
        return this.state.list.map((item, index) => {
            return (
                <div key={index}>
                    {/* {父组件向子组件传值, content={item}, 子组件通过 this.props.content 来引用这个值} */}
                    <TodoItem
                        content={item}
                        index={index}
                        deleteItem={this.handleItemDelete}
                    />
                </div>
            )
        })
    }
 ```

5. 子组件传值(变量) 给父组件;
- TodoItem 向TodoList 的函数(deleteItem) 传递变量(index)
```jsx
export default class TodoItem extends Component {
    constructor(props) {
        super(props);
        // 把handleClick 绑定放到 constructor中， 可以节约性能; 
        this.handleClick = this.handleClick.bind(this); // 优化1
    }
    render() {
        //优化2
        const { content } = this.props;
        return (<div
            onClick={this.handleClick}>
            {/* {this.props.content}  */} {/* 优化2*/}
            {content}
        </div>)
    }
    handleClick() {
        // 调用父组件, 并传递index参数;
        // this.props.deleteItem(this.props.index); // 优化3;
        const {deleteItem, index} = this.props;
        deleteItem(index);
    }
}
```
6. this变量绑定优化

- 所有需要绑定父组件this变量的函数 都可以提前在constructor中声明; 
```jsx
 constructor(props) {
     // 优化
     this.handleInputChange = this.handleInputChange.bind(this);
     this.handleBtnClick = this.handleBtnClick.bind(this);
     this.handleItemDelete = this.handleItemDelete.bind(this);
 }
 render() {
     return (
         < Fragment >
             <div>
                 <input
                     value={this.state.inputValue}
                     onChange={this.handleInputChange}
                 />
                 <button onClick={this.handleBtnClick}>提交</button>
             </div>
         </Fragment >
     );
 }
```

7. es6语法优化函数
- handleInputChange(e) 
```jsx
handleInputChange(e) {
        //原型
        // this.setState({
        //     inputValue: e.target.value,
        // })
        // 优化1: 将直接赋值 优化为剪头函数 
        // this.setState(() =>{
        //     return {
        //         inputValue: e.target.value 
        //     }
        // })
        //优化2: 将直接操作元素值，优化为操作const
        const value = e.target.value;
        this.setState(() => ({
            inputValue: value
        }))

    }
```
- handleBtnClick()
```jsx
handleBtnClick() {
        // 原型
        // this.setState({
        //     list: [...this.state.list, this.state.inputValue],
        //     inputValue: '',
        // })

        //优化1: 将直接赋值，优化为剪头函数
        // this.setState(() => ({
        //     list: [...this.state.list, this.state.inputValue],
        //     inputValue: '',
        // }))

        //优化2:
        // setState 可以接收一个prevState 参数 等价于 this.state
        // 这样可以更好的防止用户直接修改this.state 变量; 
        this.setState((prevState) => ({
            list: [...prevState.list, prevState.inputValue],
            inputValue: '',
        }))
    }
```
- handleItemDelete(index)
```jsx
handleItemDelete(index) {
        // 7.immutable 
        // state 不允许直接被做任何改变; 
        // 所以 不能直接 this.state.list.splice(index,1); 这么写虽然也可以删除指定值，但是会影响性能优化， 也不推荐使用; 
        
        //原型
        // const list = [...this.state.list];  // 5.展开数据并生成一个新数组; 
        // list.splice(index, 1);  //6.删除指定下标的数组; 
        // this.setState({
        //     list: list,
        // })

        // 优化: 带return的函数体{return}
        this.setState(() => {
            const list = [...this.state.list];
            list.splice(index, 1);
            // es6中 {list:list} 与{list} 等价;
            return {list}
        })

    }
```

todoitem.js 

1. 子组件通过 this.props 变量接收来自父组件传递的值(变量,函数)等;
```jsx
//原型
//const content = this.props.content; 
//优化: 当 子组件定义的接收变量与父组件传递的变量名相同时可以简写称如下
// 当子组件需要接收多个父组件值时 特别简洁;
const { content } = this.props;
```
2. es6语法优化函数
```jsx
handleClick() {
        // 调用父组件, 并传递index参数;
        // this.props.deleteItem(this.props.index); // 优化3;
        const {deleteItem, index} = this.props;
        deleteItem(index);
    }
```

3. PropTypes 与DefaultProps的应用

```jsx
// 限制 父组件 传递给子组件的传值数据类型
// 接收外部传递对应属性的类型校验; 
TodoItem.propTypes = {
    // content: PropTypes.string, // 当父组件不传递content字段时， 当前这个检查就失效了， 如果要强制生效， 要显示指定.isRequired,如下
    content: PropTypes.string.isRequired,  // 父组件必须传递content字段 并且必须为string, 否则会报错提示; 
    deleteItem: PropTypes.func,
    index: PropTypes.number,
    test: PropTypes.string.isRequired,
    item: PropTypes.arrayOf(PropTypes.string, PropTypes.number), // 指item可以是string 或者number类型
}

//有时父组件并不一定能传递某个字段， 这时可以给这些字段定义一个默认值, 此时就要用到 defaultProps
// 即上面TodoItem.propTypes 要求父组件必须显示传递一个string类型的test字段给子组件， 但某种情况不能传递, 此时就会
// 应用到下面的 defaultProps设置的 test = "hello react" 值， 此时也不会报错，并且页面中{test} 就会应用下面设置的'hello react' 值; 

// defaultProps 给属性指定默认值， 当外部没有传递时 使用此默认值; 
TodoItem.defaultProps = {
    test: 'hello react'
}
```

4. Props, State 与 render 函数 

> react 是一个数据驱动的框架, 数据发生变化，页面会重新渲染; 

- 当组件的state或者props发送改变时, render函数就会重新执行; 
- 当父组件的render函数被运行时， 它的子组件的render都将被重新运行一次; 

5. 什么时虚拟DOM ?

页面数据渲染原始实现
```
1.state数据
2.JSX模版
3.数据+模版结合，生成真实的DOM，来显示
4.state发生改变
5.数据+模版结合，生成真实的DOM，替换原始的DOM
``` 

缺陷:
```
第一次生成了一个完整的DOM片段
第二次生成了一个完整的DOM片段
第二次的DOM替换第次的DOM， 非常耗性能
```

改进
```
1.state数据
2.JSX模版
3.数据+模版结合，生成真实的DOM，来显示
4.state发生改变
5.数据+模版结合，生成真实的DOM，并不直接替换原始的DOM
6.新的DOM和原始的DOM做比对，找差异
7.找出input框发生了变化
8.只用新的DOM中的input元素，替换掉老的DOM中的input元素
```

上述方案的缺陷:

> 性能的提升并不明显

由此React 提出了虚拟DOM技术来改进

```
1.state数据
2.JSX模版
3.数据+模版结合，生成虚拟DOM (虚拟DOM就是一个JS对象，用它来描述真实DOM) (损耗了性能, 不大)
[ 'div'，{id:abc' }, [' span', {}, 'hello world']]
4.用虚拟DOM的结构生成真实的DOM,来显示
<div id=' abc ' ><span>hel lo world</ span></div>
5.state发生变化
6.数据+JSX模板 生成新的虚拟DOM （极大的提升了性能)
[ 'div', {id:'abc' }，['span, {}, 'bye bye']]
7.比较原始虚拟DOM和新的虚拟DOM的区别，找到区别是span中内容 (虚拟DOM 比较  即 js对象比较， 相比真实DOM比较, 极大的提升了性能)
8.直接操作DOM，改变s pan中的内容
```

> 虚拟DOM就是一个JS对象，用它来描述真实DOM

```
React 整个渲染过程 
// JSX -> React.createElement -> 虚拟DOM(JS 对象) -> 真实的DOM
// JSX 并不是虚拟DOM, 只是用来写代码更清晰一些; 
 
// return <div>item</div>
// return React.createElement('div',{}, 'item'); // 标签名, 属性, 内容
 
// return <div><span>item</span></div>
// return React.createElement('div', {}, React.createElement('span', {}, 'item))
```

虚拟DOM有什么好处? 
1.性能提升了;
2.它使得跨端应用得以实现, React Native;  使得React 即可以开发网页应用， 也可以开发原生应用; 



##### React 特性

- 声明式开发 
  - 不是直接操作DOM , 而是改变状态 重新渲染DOM;

- 可以与其它框架并存
  - 在页面中React操作自己挂载的元素，其它元素可以由其它框架进行操作(如可以引入jQuery操作别的元素);

- 组件化
  - React 将页面分成一个个组件开发,便于维护;

- 单向数据流
  - 父组件传递值给子组件， 子组件通过父组件的方法修改父组件中的变量; 
  - 不允许子组件直接修改父组件的变量, 因为父组件的变量在子组件中只是可读变量; 

- 视图层框架
  - 因为React是单向数据流，所以相关没有关联的组件要修改对方的变量值 必须要通过其共同的父组件传递, 在大型项目中会非常麻烦, 所以实际大型项目中需要再借助Redux, flux等数据框架来配合React使用;

- 函数式编程
  - React组件中都是一个个函数， 便于前端测试， 有效降低前端测试复杂度; 