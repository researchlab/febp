import React , { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
    RecommendWrapper
} from '../style';

class Recommend extends PureComponent {
    render(){
        const { recommendList } = this.props;
        return (
            <RecommendWrapper>
                {
                    recommendList.map((item) => {
                        return (
                            <a href="/" key={item.get('id')}>
                                <img 
                                src={item.get('imgUrl')}
                                alt={item.get('title')}
                                className="pic"
                                />
                            </a>
                        )
                    })
                }
            </RecommendWrapper>
        )
    }
}
const mapStatetoProps = (state) => ({
    recommendList: state.getIn(['home','recommendList'])
})
export default connect(mapStatetoProps, null)(Recommend);