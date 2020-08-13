import React , { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
    WriterWrapper,
    WriterRecommend,
    WriterSwitch,
    WriterInfo,
    WriterMore
} from '../style';
import { fromJS } from 'immutable';
import { actionCreators } from '../store';

class Writer extends PureComponent {
    render(){
        const { writerPage, writerList, writerTotalPage, changeWriterList} = this.props;
        const newList =writerList.toJS();
        const pageList = [];
        if(newList.length){
            for (let i = (writerPage - 1) * 5; i< writerPage*5;i++){
                if (newList[i] != null){
                    const item = fromJS(newList[i]);
                    pageList.push(
                            <WriterInfo key={item.get('id')}>
                                <img src={item.get('imgUrl')}
                                alt={item.get('name')}
                                />
                                <a href='/' className='name'>{item.get('name')}</a>
                                <a href='/' className='follow'>+ 关注</a>
                                <p>{item.get('info')}</p>
                            </WriterInfo>
                    )
                }
            }
        }
        return (
            <WriterWrapper>
                <WriterRecommend>推荐作者</WriterRecommend>
                <WriterSwitch onClick={()=>changeWriterList(writerPage, writerTotalPage,this.spinIcon)}>
                <i ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe606;</i>
                换一批
                </WriterSwitch>
                {/* {
                    writerList.map((item)=>{
                        return (
                            <WriterInfo key={item.get('id')}>
                                <img src={item.get('imgUrl')}
                                alt={item.get('name')}
                                />
                                <a href='/' className='name'>{item.get('name')}</a>
                                <a href='/' className='follow'>+ 关注</a>
                                <p>{item.get('info')}</p>
                            </WriterInfo>
                        )
                    })
                } */}
                {pageList}
                <WriterMore>查看全部</WriterMore>
            </WriterWrapper>
        )
    }
}

const mapState = (state) => ({
    writerList: state.getIn(['home','writerList']),
    writerPage: state.getIn(['home','writerPage']),
    writerTotalPage: state.getIn(['home','writerTotalPage'])
});

const mapDispatch = (dispatch) =>({
    changeWriterList(writerPage, writerTotalPage,spin){
        console.log(spin);
        let originAngle = spin.style.transform.replace(/[^0-9]/ig,'');
            if (originAngle) {
                originAngle = parseInt(originAngle,10);
            }else {
                originAngle = 0;
            }
            spin.style.transform = 'rotate('+(originAngle + 360)+'deg)';
        if (writerPage < writerTotalPage){
            dispatch(actionCreators.changeWriterPage(writerPage+1));
        }else{
            dispatch(actionCreators.changeWriterPage(1));
        }
    }
})
export default connect(mapState,mapDispatch)(Writer);