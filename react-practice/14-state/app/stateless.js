import React, {Component} from 'react';

export default class StateLess extends Component{
    render(){
        return(
        <div>
            <ul>
                {
                    this.props.datas.map(function(data,idx){
                        return (
                            <li key={idx}>{data}</li>
                        )
                    })
                }
            </ul>
        </div>
        )
    }
}