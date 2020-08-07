React-Redux 使用

一个第三方模块， 可以帮助在react中更加方便的使用redux; 

yarn add react-redux

```jsx
const mapStateToProps = (state) =>{
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}

// 对store的数据做修改 
// store.dispatch , props  把 store.dispatch 方法挂载到props上 
// 接收的dispatch 参数 指的就是store.dispatch 方法; 
const mapDispatchToProps = (dispatch) =>{
    return {
        changeInputValue(e){
            const action = {
                type: 'change_input_value',
                value: e.target.value
            };
            dispatch(action);
        },
        handleClick(){
            const action = {
                type: 'add_item'
            }
            dispatch(action);
        },
        handleDelete(index){
            const action = {
                type: 'delete_item',
                index
            }
            dispatch(action);
        }
    }
}
// TodoList 与store 做链接， 规则是mapStateToProps, 即 将store 中的数据 (state) 通过mapStateToProps 规则映射给组件的Props
export default connect(mapStateToProps,mapDispatchToProps)(TodoList); 
```