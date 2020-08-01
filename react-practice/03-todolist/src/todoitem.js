import React, { Component } from 'react';

export default class TodoItem extends Component {
    constructor(props) {
        super(props);
        // 把handleClick 绑定放到 constructor中， 可以节约性能; 
        this.handleClick = this.handleClick.bind(this); // 优化1
    }
    render() {
        //优化2
        const  { content } = this.props;

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