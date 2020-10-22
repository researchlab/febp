import React, {Component} from 'react';

import StateLess from './stateless';

export default class PassState extends Component{
    constructor(props){
        super(props);
        this.state = {
            list:['111','222','333']
        };
        this._handlerEvent = this._handlerEvent.bind(this);
    }

    render(){
        return (
            <div>
                {this._renderButton()}
                <StateLess datas={this.state.list}/>
            </div>
        )
    }

    _renderButton(){
        return(
            <div>
                <button onClick={this._handlerEvent}>改变值</button>
            </div>
        )
    }
    _handlerEvent(){
        this.setState({
            list:['555','666','777']
        })
    }
}