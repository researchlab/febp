import React, {Component} from 'react';
import { StaticRouter as Router, Route } from 'react-router-dom';

function RouteStatus(props){
    return (
        <Route
            render={({staticContext}) =>{
                // we have to check if staticContext exists 
                // because it will be undefined if rendered through a BrowserRouter
                if(staticContext){
                    staticContext.statusCode = props.statusCode;
                }

                return <div>{props.children}</div>
            }}
        />
    )
}

function PrintContext(props){
    return <p>Static context: {JSON.stringify(props.staticContext)}</p>
}

export default class StaticRouter extends Component{
    // This is the context object that we pass to the StaticRouter.
    // It can be modified by routes to provide additional information.
    // for the server-side render 
    staticContext = {};

    render(){
        return(
            <Router location='/foo' context={this.staticContext}>
                <div>
                    <RouteStatus statusCode={404}>
                        <p>Route with statusCode 404</p>
                        <PrintContext staticContext={this.staticContext}/>
                    </RouteStatus>
                </div>
            </Router>
        )
    }
}