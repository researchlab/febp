

参考: https://reactrouter.com/web/example/basic

创建项目 
yarn create react-app 18-react-router

启动项目
cd 18-react-router
  yarn start


安装router插件
yarn add react-router-dom 

注意

不需要安装react-router  只需要安装 react-router-dom

4.0版本已不需要路由配置，一切皆组件 

react-router 提供了一些核心的router的核心api, 包括Router, route, switch 

react-router-dom 提供了BrowserRouter, HashRouter,Route Link NavLink 


Primary Components 

React Router 提供三类组件 

- routers, like <BrowserRouter> and <HashRouter>
- route matchers, like <Route> and <Switch>
-navigation, like <Link>, <NavLink>, and <Redirect>

All of the components that you use in a web application should be imported from react-router-dom.

如果是一个路由页面， 典型的做法是把页面嵌套在一个顶层的<Router>里面;

HashRouter  

'#' 表示是HashRouter 

http://localhost:3000/#/admin/buttons

BrowserRouter 

http://localhost:3000/admin/buttons

switch  优先使用第一个匹配的链接， 匹配之后，就停止匹配了

```
<Switch>
    <Route path='/url' component={ url }>Route name </Route>
    <Route path='/url/1' component={ url1 }>Route1 name </Route>
    <Route path='/url/2' component={ url2 }>Route2 name </Route>
</Switch>
```
Note: Although React Router does support rendering <Route> elements outside of a <Switch>, as of version 5.1 we recommend you use the useRouteMatch hook instead. Additionally, we do not recommend you render a <Route> without a path and instead suggest you use a hook to get access to whatever variables you need.


Redirect 路由重定向 

<Redirect to="/admin/home" />

Link 主要用来表示跳转链接 

```
import {Link} from 'react-router-dom'

const Header = () => (
  <header>
    <nav>
      <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/three'>Three</Link></li>
      </ul>
    </nav>
  </header>
)

<Link to={{ pathname: '/three/7' }}> Three #7 </Link>
```

动态值获取 
定义: <Route path=”/three/:number”/> 取值: this.props.match.params.number


The <NavLink> is a special type of <Link> that can style itself as “active” when its to prop matches the current location.

```
<NavLink to="/react" activeClassName="hurray">
  React
</NavLink>
```
