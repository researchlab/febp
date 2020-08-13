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
});

const initWriterList = (writerList) => ({
    type: constants.INIT_WRITER_LIST,
    totalPage: Math.ceil(writerList.length/5),
    writerList
});

export const getWriterList = () => {
    return (dispatch) => {
        axios.get('/api/writerlist')
        .then((res)=>{
            const result = res.data.data;
            dispatch(initWriterList(result));
        })
        .catch(()=>{
            console.log('api/writerlist request error');
        })
    }
};

export const changeWriterPage = (writerPage) => ({
    type: constants.CHANGE_WRITER_PAGE,
    writerPage 
})