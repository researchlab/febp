import React from 'react';
import { Input , Button, List } from 'antd';
import 'antd/dist/antd.css'; 

// 当一个组件中只有render函数， 则可以将其改写成一个无状态组件来替代该组件， 即可以将其改成如下的函数组件
// 无状态组件的优势
// 1.性能高, 因为它就是一个函数, 而普通组件是一个jsx中一个类， 其中会包含生命周期函数，还有render() ，比起无状态组件中只有render()函数 只要执行更多的生命周期函数;
// 2.无状态组件 一般可以用在UI组件定义; 

// props 是父组件传递给子组件的内容; 
// const TodoListUI = (props) =>{
//     return jsx code 
// }

const TodoListUI = (props) => {
    // return jsx code 
    return (
        <div style={{ marginTop:'10px', marginLeft:'10px'}}>
        <div>
            <Input 
            value={props.inputValue} 
            placeholder="todo info" 
            style={{ width: "300px", marginRight:'10px'}}
            onChange = {props.handleInputChange}
            />
            <Button type="primary" onClick={props.handleBtnClick}>提交</Button>
        </div>
        <List
            style={{ marginTop:'10px', width:'300px'}}
            bordered
            dataSource={props.list}
            renderItem={(item,index) => (<List.Item onClick={()=>{props.handleItemDelete(index)}}>{item}</List.Item>)}
        /> 
    </div> 
    )
}

// class TodoListUI extends Component {
//     render(){
//         return (
//             <div style={{ marginTop:'10px', marginLeft:'10px'}}>
//             <div>
//                 <Input 
//                 value={this.props.inputValue} 
//                 placeholder="todo info" 
//                 style={{ width: "300px", marginRight:'10px'}}
//                 onChange = {this.props.handleInputChange}
//                 />
//                 <Button type="primary" onClick={this.props.handleBtnClick}>提交</Button>
//             </div>
//             <List
//                 style={{ marginTop:'10px', width:'300px'}}
//                 bordered
//                 dataSource={this.props.list}
//                 renderItem={(item,index) => (<List.Item onClick={(index)=>{this.props.handleItemDelete(index)}}>{item}</List.Item>)}
//             /> 
//         </div> 
//         )
//     }
// }

export default TodoListUI;