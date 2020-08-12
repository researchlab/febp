import * as constants from './constants';
import axios from 'axios';

export const setQrcode = (qrCode) => ({
    type: constants.QRCODE,
    qrCode
});

const changeHomeData = (result) => ({
    type: constants.CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList
});

export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('/api/home')
        .then((res)=>{
            const result = res.data.data;
            dispatch(changeHomeData(result));
        })
        .catch(()=>{
            console.log('error');
        });
    }
}

const addArticleList = (result,nextPage) => ({
    type: constants.ADD_ARTICALE_DATA,
    articleList: result.articleList,
    nextPage
})
export const getMoreList = (page) => {
    return (dispatch) => {
        axios.get('/api/homelist?page=' + page)
        .then((res)=>{
            const result = res.data.data;
            dispatch(addArticleList(result, page+1));
        })
        .catch(()=>{
            console.log('error');
        });
    }
}

export const toggleTopShow = (show) => ({
    type: constants.CHANGE_SCROLL_SHOW,
    show
})