import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
   topicList: [],
   articleList: [],
   recommendList: [],
   qrCode: false
});

export default (state = defaultState, action) => {
    switch (action.type){
        case constants.QRCODE:
            return state.set('qrCode',action.qrCode);
        case constants.CHANGE_HOME_DATA:
            // state.set('topicList',fromJS(action.topicList));
            return state.merge({
                topicList: fromJS(action.topicList),
                articleList: fromJS(action.articleList),
                recommendList: fromJS(action.recommendList),
                qrCode: fromJS(action.qrCode)
            })
        default:
            return state;
    }
    
}
