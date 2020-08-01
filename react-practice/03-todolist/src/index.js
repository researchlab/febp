import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './todolist';

// 只有引入 React (import React from 'react';) 才能使用jsx语法
//jsx  <App /> 
ReactDOM.render(
  <React.StrictMode>
    <TodoList />
  </React.StrictMode>,
  document.getElementById('root')
);


