import React from 'react';
import {
    BrowserRouter as Router, 
    Switch,
    Route,
    Link,
    Redirect,
    useParams,
    useRouteMatch 
} from 'react-router-dom';

export default function RecursivePaths(){
    return (
        <Router>
            <Switch>
                <Route path='/:id'>
                    <Person />
                </Route>
                <Route path='/'>
                    <Redirect to='/0' />
                </Route>
            </Switch>
        </Router>
    )
}

function Person(){
    let { url } = useRouteMatch();
    let { id  } = useParams()
    let person = find(parseInt(id));

    return (
        <div>
            <h3>{person.name}'s Friends</h3>
            <ul>
                {person.friends.map(id=>(
                    <li key={id}><Link to={`${url}/${id}`}>{find(id).name}</Link></li>
                ))}
            </ul>
            <Switch>
                <Route path={`${url}/:id`}>
                    <Person/>
                </Route>
            </Switch>
        </div>
    )
}

const PEEPS = [
    {id : 0, name: "Michelle",friends:[1,2,3]},
    {id : 1, name: "Sean", friends:[0,3]},
    {id : 2, name: "Kim", friends:[0,1,3]},
    {id : 3, name: "David", friends:[1,2]}
]

function find(id){
    return PEEPS.find(p => p.id === id)
}