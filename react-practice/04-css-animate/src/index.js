import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// 只有引入 React (import React from 'react';) 才能使用jsx语法
//jsx  <App /> 
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


