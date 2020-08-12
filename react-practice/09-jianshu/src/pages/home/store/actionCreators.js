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
})
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