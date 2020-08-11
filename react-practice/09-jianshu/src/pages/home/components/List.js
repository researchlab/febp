import React , { Component } from 'react';
import { connect } from 'react-redux';
import {
    ListItem,
    ListInfo
} from '../style';

class List extends Component {
    render(){
        const { articleList } = this.props;
        return (
            <div>
                {               
                    articleList.map((item) =>{
                        return (
                            <ListItem key={item.get('id')}>
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
                        )
                    }) 
                }
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
        articleList: state.getIn(['home','articleList'])
})
export default connect(mapStatetoProps,null)(List);