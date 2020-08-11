import { combineReducers } from 'redux-immutable';
// import headerReducer from '../common/header/store/reducer';

import { reducer as headerReducer } from '../common/header/store';

import { reducer as homeReducer } from '../pages/home/store';

// export default combineReducers({
//     header: headerReducer
// })

// 得到一个immutable对象的state;
// import { combineReducers } from 'redux-immutable';

// 得到一个js对象的state;
// import { combineReducers } from 'redux';

const reducer = combineReducers({
    header: headerReducer,
    home: homeReducer
})

export default reducer; 