import React , { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
    ListItem,
    ListInfo,
    LoadMore
} from '../style';

import {actionCreators} from '../store';
import { Link } from 'react-router-dom';

class List extends PureComponent {
    render(){
        const { articleList, getMoreList, page } = this.props;
        return (
            <div>
                {               
                    articleList.map((item) =>{
                        return (
                            <Link key={item.get('id')} to='/detail'>
                                <ListItem>
                                    <img 
                                    src={item.get('imgUrl')} 
                                    alt={item.get('title')}
                                    className='list-pic'
                                    />
                                    <ListInfo>
                                        <h3 className="title">{item.get('title')}</h3>
                                        <p className="desc">{item.get('desc')}</p>
                                    </ListInfo>
                                </ListItem>
                            </Link> 
                        )
                    }) 
                }
                <LoadMore onClick={()=> getMoreList(page)}>阅读更多</LoadMore>
            </div>      
        )
    }
}

// const mapStatetoProps = (state) => {
//     return {
//         articleList: state.getIn(['home','articleList'])
//     }
// }

// es6 简写， 当只返回一个对象时， 去掉return 用() 包裹一下即可; 
const mapStatetoProps = (state) => ({
        articleList: state.getIn(['home','articleList']),
        page: state.getIn(['home','articlePage'])
})

const mapDispatchtoProps = (dispatch) => ({
    getMoreList(page){
        dispatch(actionCreators.getMoreList(page));
    }
})
export default connect(mapStatetoProps,mapDispatchtoProps)(List);