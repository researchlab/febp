import React,  { useContext, createContext, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
} from 'react-router-dom';

export default function RedirectsAuth(){
    return (
        <ProvideAuth>
            <Router>
                <div>
                    <AuthButton />
                    <ul>
                        <li><Link to='/public'>Public Page</Link></li>
                        <li><Link to='/protected'>Protected Page</Link></li>
                    </ul>

                    <Switch>
                        <Route path='/public'>
                            <PublicPage />
                        </Route>
                        <Route path='/login'>
                            <LoginPage />
                        </Route>
                        <PrivateRoute path='/protected'>
                            <ProtectedPage />
                        </PrivateRoute>
                    </Switch>
                </div>
            </Router>
        </ProvideAuth>
    )
}

const fakeAuth = {
    isAuthenticated: false, 
    signin(cb) {
        fakeAuth.isAuthenticated = true
        setTimeout(cb, 100);
    },
    signout(cb){
        fakeAuth.isAuthenticated = false
        setTimeout(cb, 100);
    }
}

// 如果需要在组件之间共享状态， 可以使用useContext
// 首选需要通过createContext 创建在一个Context 
const authContext = createContext();

function ProvideAuth({children}) {
    const auth = useProvideAuth();
    return (
        // authContext.Provider 提供了一个Context对象，这个对象可以被子组件共享
        <authContext.Provider value={auth}>
            {children}
        </authContext.Provider>
    )
}

function useAuth(){
    // useContext()钩子函数用来引入Context对象，从中获取auth属性。
    return useContext(authContext)
}

function useProvideAuth(){
    const [user, setUser] = useState(null)

    const signin = cb => {
        return fakeAuth.signin(()=>{
            setUser("user")
            cb()
        })
    }

    const signout = cb => {
        return fakeAuth.signout(()=>{
            setUser(null)
            cb()
        })
    }

    return {
        user,
        signin,
        signout
    }
}

function AuthButton(){
    // history.push 这个方法会向history栈里面添加一条新记录，这个时候用户点击浏览器的回退按钮可以回到之前的路径。

    // history.go 这个方法的参数是一个整数，意思是在 history 记录中向前或者后退多少步，类似 window.history.go(n)

    // history.replace 跟 history.push 很像，唯一的不同就是，它不会向 history 添加新记录，而是跟它的方法名一样 —— 替换掉当前的 history 记录。
    let history = useHistory()
    let auth = useAuth()

    return auth.user ? (
        <p>
            Welcome! { " " }
            <button
                onClick ={() => {
                    auth.signout(()=>history.push('/'))
                }}
            >
                Sign out
            </button>
        </p>
    ) : (
        <p>You are not logged in.</p>
    )
}

function PrivateRoute({children, ...rest}){
    let auth = useAuth()
    return (
        <Route
            {...rest}
            render={({ location })=>
            auth.user ? (
                children
            ) : (
                <Redirect
                    to={{
                        pathname: '/login',
                        state: { from :location }
                    }}
                />
            )
        }
        />
    )
}

function PublicPage(){
    return <h3>Public</h3>
}

function ProtectedPage(){
    return <h3>Protected</h3>
}

function LoginPage(){
    let history = useHistory()
    let location = useLocation()
    let auth = useAuth()
    console.log('history:', history)
    console.log('location:',location)
    let { from  } = location.state || { from: { pathname: '/'} }
    let login = () => {
        auth.signin(()=>{
            history.replace(from)
        })
    }

    return (
        <div>
            <p>You must log in to view the page at { from.pathname } </p>
            <button onClick={login}>Log in</button>
        </div>
    )
}