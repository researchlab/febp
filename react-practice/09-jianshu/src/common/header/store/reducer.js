import * as constants from './constants';
import { fromJS } from 'immutable';

// 将defaultState 变成一个immutable 对象, 
// 作用是  不许直接修改state 
// fromJS  也会把list 变成一个immutable 数组， 此时调用set 改变list数组， 如果传过来的data 是普通数组， 则list 也会变成普通数组, 
// 所以data 在传递过来时要变成immutable 数组才行， 
const defaultState = fromJS({
    focused: false,
    mouseIn: false,
    list: [],
    page: 1,
    totalPage: 1
});

// 优化: switch 替换 if 
export default (state = defaultState, action) =>{
    switch (action.type){
        case constants.SEARCH_FOCUS:
            return state.set('focused', true);
        case constants.SEARCH_BLUR: 
            return state.set('focused', false);
        case constants.CHANGE_LIST:
            // return state.set('list', action.data).set('totalPage', action.totalPage);
            return state.merge({ // merge 同时修改多个字段; 
                list:action.data,
                totalPage: action.totalPage
            });
        case constants.MOUSE_ENTER:
            return state.set('mouseIn',true);
        case constants.MOUSE_LEAVE:
            return state.set('mouseIn',false);
        case constants.CHANGE_PAGE:
            return state.set('page',action.page);
        default:
            return state;
    }
    // if (action.type === constants.SEARCH_FOCUS){
    //     // immutable对象的set方法， 会结合之前的immutable 对象的值 和设置的值
    //     // 返回一个全新的对象;
    //     return state.set('focused', true); // immutable 对象 利用set方法来修改; 
    //     // return {
    //     //     focused: true
    //     // };
    // }
    // if (action.type === constants.SEARCH_BLUR){
    //     return state.set('focused', false);
    //     // return { 
    //     //     focused: false
    //     // }
    // }
    // if (action.type === constants.CHANGE_LIST) {
    //     return state.set('list', action.data);
    // }
    //return state;
}