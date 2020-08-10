import React from 'react';
import { Provider } from 'react-redux';

import Header from './common/header/index';

import store from './store/index';

function App() {
  return (
    <Provider store={store}>
        <Header />
    </Provider>
  );
}

export default App;
