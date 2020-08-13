import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
   topicList: [],
   articleList: [],
   recommendList: [],
   qrCode: false,
   articlePage: 1,
   showScroll: false,
   writerList: [],
   writerPage: 1,
   writerTotalPage: 1
});

const changeHomeData = (state, action) => {
    return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList),
        qrCode: fromJS(action.qrCode)
    });
}

const addArticleList = (state, action) => {
    return state.merge({
        articleList: state.get('articleList').concat(fromJS(action.articleList)),
        articlePage: action.nextPage
    });
}
export default (state = defaultState, action) => {
    switch (action.type){
        case constants.QRCODE:
            return state.set('qrCode',action.qrCode);
        case constants.CHANGE_HOME_DATA:
            // state.set('topicList',fromJS(action.topicList));
            return changeHomeData(state, action);
        case constants.ADD_ARTICALE_DATA:
            // 在原来的基础上追加内容 concat
            // return state.set('articleList', state.get('articleList').concat(fromJS(action.articleList)));
            return addArticleList(state, action);
        case constants.CHANGE_SCROLL_SHOW: 
            return state.set('showScroll', action.show);
        case constants.INIT_WRITER_LIST:
            return state.merge({
                writerList:fromJS(action.writerList),
                writerTotalPage: action.totalPage,
            });
        case constants.CHANGE_WRITER_PAGE:
            return state.set('writerPage',action.writerPage);
        default:
            return state;
    }
    
}
