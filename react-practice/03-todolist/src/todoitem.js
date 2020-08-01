import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TodoItem extends Component {
    constructor(props) {
        super(props);
        // 把handleClick 绑定放到 constructor中， 可以节约性能; 
        this.handleClick = this.handleClick.bind(this); // 优化1
    }
    render() {
        //优化2
        const  { content , test } = this.props;
        // JSX -> React.createElement -> 虚拟DOM(JS 对象) -> 真实的DOM
        // JSX 并不是虚拟DOM, 只是用来写代码更清晰一些; 
        
        // return <div>item</div>
        // return React.createElement('div',{}, 'item'); // 标签名, 属性, 内容

        // return <div><span>item</span></div>
        // return React.createElement('div', {}, React.createElement('span', {}, 'item))

        return (<div
            onClick={this.handleClick}>
            {/* {this.props.content}  */} {/* 优化2*/}
            {test} - {content}
        </div>)
    }
    handleClick() {
        // 调用父组件, 并传递index参数;
        // this.props.deleteItem(this.props.index); // 优化3;
        const {deleteItem, index} = this.props;
        deleteItem(index);
    }
}

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