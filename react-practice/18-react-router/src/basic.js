import React from 'react'
import {
    BrowserRouter as Router, // 浏览器路由 
    Switch,
    Route,
    Link   // Link 就类似一个 <a></a> 标签 跳转到对应的Route上 
} from 'react-router-dom'

export default function BasicRouter(){
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/users'>Users</Link></li>
                    </ul>
                </nav>
                <hr/>
                {/* Switch 路由匹配到第一个路由就停止匹配后面的了 */}
                <Switch>
                    <Route path='/about'><About /></Route>
                    <Route path='/users'><Users/></Route>
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

function Users(){
    return <h2>Users</h2>
}