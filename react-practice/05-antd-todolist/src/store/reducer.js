
import { 
    CHANGE_INPUT_VALUE,
    ADD_TODO_ITEM,
    DELETE_TODO_ITEM,
} from './actionTypes';

// state: 整个store 仓库中存储的数据;
// action: 

const defaultState = {
    inputValue: '',
    list: []
};

// reducer 可以接收state, 但是绝不能修改state;
export default (state = defaultState, action)=> {
    if(action.type === CHANGE_INPUT_VALUE){
        // deep copy
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    if (action.type === ADD_TODO_ITEM){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        return newState;
    }
    if (action.type === DELETE_TODO_ITEM){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index,1);
        return newState;
    }
    return state;
}