import * as constants from './constants';
import axios from 'axios';
import { fromJS } from 'immutable';

export const searchFocus = () =>({
    type: constants.SEARCH_FOCUS
});

export const searchBlur = () =>({
    type: constants.SEARCH_BLUR
});

export const mouseEnter = () =>({
    type: constants.MOUSE_ENTER
});
export const mouseLeave = () =>({
    type: constants.MOUSE_LEAVE
});

export const changePage = (page) =>({
    type: constants.CHANGE_PAGE,
    page
});

// 使用了redux-thunk , action 就可以返回一个函数了， 并且函数本身还能接收一个dispatch 方法; 
// 如果不使用redux-thunk  则action 只能返回 对象; 
// 借助axios 来做异步请求; 
export const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json')
        .then((res)=>{
            const data = res.data; 
            dispatch(changeList(data.data));
        })
        .catch(()=>{
            console.log('error');
        });
    }
};

const changeList = (data) => ({
    type: constants.CHANGE_LIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length /10)
});

export const changePageType = (pageType) =>({
    type: constants.CHANGE_PAGE_TYPE,
    pageType
});