import * as constants from './constants';
import { fromJS } from 'immutable';

// 将defaultState 变成一个immutable 对象, 
// 作用是  不许直接修改state 
const defaultState = fromJS({
    focused: false
});

export default (state = defaultState, action) =>{
    if (action.type === constants.SEARCH_FOCUS){
        // immutable对象的set方法， 会结合之前的immutable 对象的值 和设置的值
        // 返回一个全新的对象;
        return state.set('focused', true); // immutable 对象 利用set方法来修改; 
        // return {
        //     focused: true
        // };
    }
    if (action.type === constants.SEARCH_BLUR){
        return state.set('focused', false);
        // return { 
        //     focused: false
        // }
    }
    return state;
}