import React , { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
    DetailWrapper,
    Header,
    Content
} from './style';
import { actionCreators } from './store';

class Detail extends PureComponent {
    render(){
        const { title, content }  = this.props;
        return (
            <DetailWrapper>
                <Header>{title}</Header>
                <Content dangerouslySetInnerHTML={{__html: content}} />
            </DetailWrapper>
        )
    }
    componentDidMount(){
        console.log(this.props);
        this.props.getDetail();
    }
}

const mapState = (state) => ({
    title: state.getIn(['detail','title']),
    content: state.getIn(['detail','content'])
})
const mapDispatch = (dispatch) => ({
    getDetail(){
        dispatch(actionCreators.getDetail());
    }
})
export default connect(mapState, mapDispatch)(withRouter(Detail));