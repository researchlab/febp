import {takeEvery , put } from 'redux-saga/effects';
import { GET_INIT_LIST } from './actionTypes';
import {initListAction} from './actionCreators';

import axios from 'axios';

// es6 generator 函数
function* todoSagas(){
    yield takeEvery(GET_INIT_LIST,getInitList); // 扑捉每一个GET_INIT_LIST 这个类型的action, 就会执行对应的方法
}

function* getInitList(){
    // axios.get('/api/todolist')
    // .then((res)=>{
    //     const data = res.data;
    //     const action = initListAction(data);
    //     put(action);   
    // })
    // .catch((e)=>{
    //     console.log(e);
    // })

    try{
        const res = yield axios.get('/api/todolist'); // yield 表示等待执行完成 在进行下一步操作;
        const action = initListAction(res.data);
        yield put(action);
    }catch(e){
        // 当上面axios.get()请求失败 则执行catch(e)方法;
        console.log(e);
    }
    
}
export default todoSagas;