import React, { Component, Fragment } from 'react';
import { CSSTransition,TransitionGroup } from 'react-transition-group';

import './style.css';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            show: true,
            list: []
        }
        this.handleToggole = this.handleToggole.bind(this);
        this.handleAddItem = this.handleAddItem.bind(this);
    }
    render(){
        return (
            <Fragment>
                <div className={this.state.show ? 'show': 'hide'}>hello</div>
                <CSSTransition
                    in={this.state.show}
                    timeout={1000} /* 1s */
                    classNames='fade'
                    unmountOnExit
                    onEntered={(el)=>{el.style.color='orange'}}
                    appear={true}
                >
                <div>world</div>
                </CSSTransition>
                <button onClick={this.handleToggole}>toggle</button>
                <hr />
                <button onClick={this.handleAddItem}>addItem</button>
                <TransitionGroup>
                {
                    this.state.list.map((item,index)=>{
                        return (
                            <CSSTransition
                                timeout={1000} /* 1s */
                                classNames='fade'
                                unmountOnExit
                                onEntered={(el)=>{el.style.color='orange'}}
                                appear={true}
                                key={index}
                            >
                            <div>item</div>
                            </CSSTransition>
                        )
                    })
                }
                </TransitionGroup>
            </Fragment>
        )
    }
    handleToggole(){
        this.setState({
            show: this.state.show ? false: true 
        })
    }

    handleAddItem(){
        this.setState((prevState)=>{
            return {
                list: [...prevState.list, 'item']
            }
        })
    }
}
export default App;