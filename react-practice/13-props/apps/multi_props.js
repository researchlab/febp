import React from 'react';
import PropTypes from 'prop-types';

class MultiProps extends React.Component{
    // 设置组件props默认值
    static defaultProps={
        data:{
                name:"默认值",
                address:"默认值",
                height:"默认值"
            },
        data2:"默认值",
        data3:()=>{
            console.log("默认值")
        }
    }
    constructor(props){
        super(props)
        this.handlerClick = this.handlerClick.bind(this)
    }
    render(){
        const {data,data2} = this.props;
    return (
        <div>
            名字:{data.name}<br/>
            地址:{data.address}<br/>
            身高:{data.height}<br/>
            信息:{data2}<br/>
            <button onClick={this.handlerClick}>测试方法</button>
        </div>
    )
    }
    handlerClick(){
        {this.props.data3("我是测试方法:")}
    }
};

MultiProps.propTypes = {
    // 如下形式表示 data 不是必须的
    // data: PropTypes.any,
    // 如下形式表示 data 必须传递, 但是没有传值, 只要有默认值也不会报警
    data: PropTypes.any.isRequired,
    data2: PropTypes.string,
    data3: PropTypes.func
}

export default MultiProps