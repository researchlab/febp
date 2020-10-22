import React from 'react';

class PropsChinldren extends React.Component{
    constructor(props){
        super(props)
        // this.renderList = this.renderList.bind(this)
    }
    render(){
        return (
            <div>
                遍历提取this.props.children的值
                <ul>
                    {this.renderList()}
                </ul>
            </div>
        )
    }
    renderList(){
        return (React.Children.map(this.props.children, function(child){
            // return <li>type:{child.type}, value:{child.props.children}</li>
            return <li>{child}</li>
        }))
    }
};

export default PropsChinldren;