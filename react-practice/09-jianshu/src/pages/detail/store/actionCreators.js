import axios from 'axios';
import { constants } from '.';

const changeDetail = (title, content) =>({
    type: constants.CHANGE_DETAIL,
    title,
    content
})
export const getDetail = () =>{
    return (dispatch) => {
        axios.get('/api/detail.json')
        .then((res)=>{
            const result = res.data.data;
            dispatch(changeDetail(result.title, result.content));
        })
        .catch(()=>{
            console.log('/api/detail.json error');
        })
    }
}