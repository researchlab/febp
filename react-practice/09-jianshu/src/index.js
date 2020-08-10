import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {GlobalStyle} from './style';
import {IconFontGlobalStyle } from './statics/iconfont/iconfont';

ReactDOM.render(
  <React.StrictMode>
    
    <GlobalStyle />
    <IconFontGlobalStyle />
    <App />
    
  </React.StrictMode>,
  document.getElementById('root')
);
