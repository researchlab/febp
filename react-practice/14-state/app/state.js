import React, {Component} from 'react';
import PassState from './pass_state';

export default class State extends Component{
    constructor(props){
        super(props);
        this.state = {
            count:0,
        };
        this._handlerEvent = this._handlerEvent.bind(this);
    }

    _handlerEvent(){
        this.setState({
            count: this.state.count+1,
        })
    }

    _renderView(){
        return (
            <div>
                <button onClick={this._handlerEvent}>点击{this.state.count}次</button>
            </div>
        )
    }
    _logFun(){
        let num = this.state.count;
        console.log('render调用了'+num+'次');
    }
    render(){
        return (
            <div>
                {this._renderView()}
                {this._logFun()}
                <br/>
                <PassState/>
            </div>
        )
    }
}