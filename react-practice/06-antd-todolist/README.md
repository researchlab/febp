将05-antd-todolist 项目 拆分成 UI组件和容器组件
- UI组件  负责页面渲染; 
- 容器组件  负责页面逻辑;

子组件向父组件传递值: 用剪头函数
> (index)=>{this.props.handleItemDelete(index)

当一个组件中只有render函数， 则可以将其改写成一个无状态组件来替代该组件， 即可以将其改成如下的函数组件

无状态组件的优势
1.性能高, 因为它就是一个函数, 而普通组件是一个jsx中一个类， 其中会包含生命周期函数，还有render() ，比起无状态组件中只有render()函数 只要执行更多的生命周期函数;

2.无状态组件 一般可以用在UI组件定义; 

使用Redux-thunk 中间件进行ajax 请求发送;

yarn add redux-thunk 

redux-thunk 作用
- 使得action 不仅只能是一个对象，还可以是个函数;
- store.dispatch(action) 中的action 函数自动就能接收到一个 dispatch的函数参数， 使得action函数内部可以使用这个dispatch函数;
- redux-thunk 使得异步函数 可以从 react 组件声明周期函数中提炼出来放到actionCreators里面; 
- 将异步函数提取出来 使得自动化测试会更容易; 

```jsx
export const getTodoList = () =>{
    return (dispatch)=>{ // return 一个函数， 可以接收一个dispatch
        axios.get('/api/todolist')
        .then((res)=>{
            const data = res.data;
            const action = initListAction(data);
            dispatch(action);
            console.log(data);   
        })
        .catch((e)=>{
            console.log(e);
        })
    }
}
```
