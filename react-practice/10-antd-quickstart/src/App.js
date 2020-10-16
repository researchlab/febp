import React from 'react';
import {Button, DatePicker, version } from 'antd';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>antd version: {version}</h1>
      <DatePicker/>
      <Button type="primary" style={{marginLeft: 8 }}>Button</Button>
    </div>
  );
}

export default App;
