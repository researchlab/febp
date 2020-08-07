import React, { Component } from 'react';
import axios from 'axios';
import TodoListUI from './TodoListUI';

import store from './store/index';


import {
    getInputChangeAction, getAddItemAction, getDeleteItemAction
} from './store/actionCreators';

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
        this.handleItemDelete = this.handleItemDelete.bind(this);
    }
    render(){
        return <TodoListUI 
                inputValue = {this.state.inputValue}
                handleInputChange = {this.handleInputChange}
                handleBtnClick = {this.handleBtnClick}
                list = {this.state.list}
                handleItemDelete = {this.handleItemDelete}
        />
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