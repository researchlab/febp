import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {GlobalStyle} from './style';
import { IconFontGlobalStyle } from './statics/iconfont/iconfont';

ReactDOM.render(
  <Fragment>
    <GlobalStyle />
    <IconFontGlobalStyle />
    <App />
  </Fragment>,
  document.getElementById('root')
);
