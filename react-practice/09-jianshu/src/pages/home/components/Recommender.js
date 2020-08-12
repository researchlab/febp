import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
    RecommenderWrapper,
    RecommenderItem
} from '../style';

class Recommender extends PureComponent {
    render(){
        const { recommendList }  = this.props;
        return (
            <RecommenderWrapper>
                {
                    recommendList.map((item) => {
                        return <RecommenderItem imgUrl={item.get('imgUrl')} key={item.get('id')}/>
                    })
                }
            </RecommenderWrapper>
        )
    }
}

const mapStatetoProps = (state) =>({
    recommendList: state.getIn(['home','recommendList'])
})
export default connect(mapStatetoProps,null)(Recommender); 