import React, { Component } from 'react';
import {connect} from 'react-redux';

// 无状态组件 提升代码性能; 
const TodoList = (props) =>{
// 优化 结构化赋值;
const { inputValue, changeInputValue,handleClick,list, handleDelete } = props;
        
return (
    <div>
        <div>
            <input 
                value = {inputValue}  // 换成react-redux 则这里要将this.state 换成this.props  
                onChange = {changeInputValue}  // this.props. 来调用方法
                placeholder="todo list"
            />
            <button onClick={handleClick}>提交</button>
        </div>
        <ul>
             {
                 list.map((item,index) =>{
                        return <li key={index} onClick={()=>{
                            handleDelete(index)
                        }}>{item}</li>
                 })
             }
        </ul>
    </div>
)

}
// class TodoList extends Component {
//     render(){
//         // 优化 结构化赋值;
//         const { inputValue, changeInputValue,handleClick,list, handleDelete } = this.props;
        
//         return (
//             <div>
//                 <div>
//                     <input 
//                         value = {inputValue}  // 换成react-redux 则这里要将this.state 换成this.props  
//                         onChange = {changeInputValue}  // this.props. 来调用方法
//                         placeholder="todo list"
//                     />
//                     <button onClick={handleClick}>提交</button>
//                 </div>
//                 <ul>
//                      {
//                          list.map((item,index) =>{
//                                 return <li key={index} onClick={()=>{
//                                     handleDelete(index)
//                                 }}>{item}</li>
//                          })
//                      }
//                 </ul>
//             </div>
//         )
//     }
// }
//固定写法 接收一个state 参数 并且return 一个对象; 
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