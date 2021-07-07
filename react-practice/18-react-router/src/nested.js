import React from 'react'
import {
    BrowserRouter as Router, 
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from 'react-router-dom'

export default function NestedRouter(){
    return (
        <Router>
            <div>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/topics'>Topics</Link></li>
                </ul>
                <hr/>
                <Switch>
                    {/* exact={true} 表示精确匹配 */}
                    <Route exact={true} path='/about'><About/></Route>
                    {/* <Route path='/topics' component={Topics}/> */}
                    <Route path='/topics'><Topics/></Route>
                    <Route path='/'><Home/></Route>
                </Switch>
            </div>
        </Router>
    )
}

function Home(){
    return <h2>Home</h2>
}

function About(){
    return <h2>About</h2>
}

function Topics(){
    let match = useRouteMatch()
    // console.log(match)
    // output match object
    // {
    //     "path": "/topics",
    //     "url": "/topics",
    //     "isExact": false,
    //     "params": {}
    // }
    return (
        <div>
            <h2>Topics</h2>
            <ul>
                <li>
                    <Link to={`${match.url}/components`}>Components</Link>
                </li>
                <li>
                    <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
                </li>
            </ul>
            {/* Topics 有自己的Switch 和 Route 路由 */}
            <Switch>
                <Route path={`${match.path}/:topicId`}><Topic/></Route>
                <Route path={match.path}><h3>Please select a topic</h3></Route>
            </Switch>
        </div>
    )
}

function Topic(){
    let {topicId } = useParams()
    return <h3>Requested topic ID: {topicId} </h3>
}