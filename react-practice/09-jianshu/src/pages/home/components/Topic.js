import React , { PureComponent } from 'react';
import {
    TopicWrapper,
    TopicItem
} from '../style';

import { connect } from 'react-redux';

class Topic extends PureComponent {
    render(){
        const { topicList } = this.props;
        return (
            <TopicWrapper>
                {
                    topicList.map((item) =>{
                        return (
                            <TopicItem key={item.get('id')}> 
                                <img 
                                src={item.get('imgUrl')} 
                                alt={item.get('title')}
                                className='topic-pic'
                                />
                                {item.get('title')}
                            </TopicItem>
                        )
                    })
                }
            </TopicWrapper>
        )
    }
}

const mapStateToProps = (state) =>({
       topicList: state.getIn(['home','topicList'])
})

export default connect(mapStateToProps,null)(Topic);