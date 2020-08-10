import { combineReducers } from 'redux';
// import headerReducer from '../common/header/store/reducer';

import { reducer as headerReducer } from '../common/header/store';


// export default combineReducers({
//     header: headerReducer
// })


const reducer = combineReducers({
    header: headerReducer
})

export default reducer; 