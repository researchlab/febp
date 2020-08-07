import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import { Provider } from 'react-redux';
import store from './store';

// Provider 提供器 连接了store , 则 Provider 组件内部的其它组件都可以使用store了； 
// Provider 与 store 做了关联， 使得 Provider 内部的组件都有能力获取到store中的内容了；

const App = (
    <Provider store={store}> 
        <TodoList/>
    </Provider>
);
ReactDOM.render(
     App,
    document.getElementById('root')
);