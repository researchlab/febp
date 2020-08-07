import React, { Component } from 'react';
import axios from 'axios';
import { Input , Button, List } from 'antd';

import store from './store/index';

// import { 
//     CHANGE_INPUT_VALUE,
//     ADD_TODO_ITEM,
//     DELETE_TODO_ITEM,
// } from './store/actionTypes';

import {
    getInputChangeAction, getAddItemAction, getDeleteItemAction
} from './store/actionCreators';

import 'antd/dist/antd.css'; 

const data = [];


export default class TodoList extends Component{
    constructor(props){
        super(props);
        this.state  = store.getState();
        console.log(this.state);
        this.handleInputChange  = this.handleInputChange.bind(this);
        // 当前组件订阅store, 当store中数据发生改变，订阅的方法(handleStoreChange)就会被执行一次;
        this.handleStoreChange = this.handleStoreChange.bind(this);
        store.subscribe(this.handleStoreChange);
        this.handleBtnClick = this.handleBtnClick.bind(this);
    }
    render(){
        return(
            <div style={{ marginTop:'10px', marginLeft:'10px'}}>
                <div>
                    <Input 
                    value={this.state.inputValue} 
                    placeholder="todo info" 
                    style={{ width: "300px", marginRight:'10px'}}
                    onChange = {this.handleInputChange}
                    /><Button type="primary" onClick={this.handleBtnClick}>提交</Button>
                </div>
                <List
                    style={{ marginTop:'10px', width:'300px'}}
                    bordered
                    dataSource={this.state.list}
                    renderItem={(item,index) => (<List.Item onClick={this.handleItemDelete.bind(this,index)}>{item}</List.Item>)}
                /> 
            </div>
        )
    }

    handleItemDelete(index){
        // const action = {
        //     type:DELETE_TODO_ITEM,
        //     index // 等价于 index:index
        // };
        const action = getDeleteItemAction(index);
        store.dispatch(action);
    }
    handleInputChange(e){
        // const action = {
        //     type: CHANGE_INPUT_VALUE,
        //     value: e.target.value 
        // }
        const action = getInputChangeAction(e.target.value);
        store.dispatch(action);
    }
    handleStoreChange(){
        this.setState(store.getState());
    }
    handleBtnClick(){
        // const action = {
        //     type: ADD_TODO_ITEM
        // };
        const action = getAddItemAction();
        store.dispatch(action);
    }
    //componentDidMount(){
        // axios.get('/api/todolist')
        // .then((res)=>{
        //     console.log(res);
        // })
        // .catch((e)=>{
        //     console.log(e);
        // });
    //}
}