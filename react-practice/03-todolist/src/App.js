import React , {Component } from 'react';

// import {Component } from 'react';
// == 
// import React from 'react';
// const Component = React.Component;

// 函数组件 
// 函数组件 不需要包裹一层render(){}
// function App() {
//   return (
//     <div>
//       hello world
//     </div>
//   );
// }

// export default App;


// React 组件
// export default class App extends React.Component{
  export default class App extends Component{
  render(){ // render(){}中的代码都是JSX语法， 所以需要引入 React (import React from 'react';)
    return (
      <div>
        hello, React
      </div>
    )
  }
}
