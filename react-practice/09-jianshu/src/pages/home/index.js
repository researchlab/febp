import React , { PureComponent } from 'react';
import Topic from './components/Topic';
// import Recommend from './components/Recommend';
import Recommender from './components/Recommender';

import List from './components/List';
import Writer from './components/Writer';
import Download from './components/Dowload';
import { connect } from 'react-redux';

import { actionCreators } from './store';
import { actionCreators as headerActionCreators } from '../../common/header/store';
import { constants as headerConstants } from '../../common/header/store';

import { BackTop } from './style';

import { 
    HomeWrapper,
    HomeLeft,
    HomeRight
 } from './style';

import banner from '../../statics/banner.png';

// Component 与 PureComponent 的区别
// PureComponent 底层自己实现了一个shouldComponentUpdate 的方法
// 它自己会判断当store 发生变化时 当前组件是否要重新render 了; 
// 这样当 store 与 当前组件无关时， 则 不需要重新 render了， 大大提升了组件的性能; 
// 这个有一个前提 当前框架用了 immutable.js 来管理组件的数据; 
// 所以建议  PureComponent 与 immutable.js 配合使用; 
class Home extends PureComponent {
    
    render(){
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner-img' src={banner} alt="banner"/>
                    <Topic/>
                    <List/>
                </HomeLeft>
                <HomeRight>
                    {/* <Recommend/> */}
                    <Recommender/>
                    <Download/>
                    <Writer/>
                </HomeRight>
                { this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> : null }
            </HomeWrapper>
        )
    }
    componentDidMount(){
        this.props.changePageType(headerConstants.HOME_PAGE);
        this.props.changeHomeData();
        this.props.getWriterList();
        this.bindEvents();
    }
    handleScrollTop(){
        window.scrollTo(0,0);
    }
    // 在组件解绑后 一定要记得销毁绑定在组件上的事件;
    componentWillUnmount(){
        this.props.changePageType('');
        window.removeEventListener('scroll', this.props.changeScrollTopShow);
    }
    bindEvents(){
        window.addEventListener('scroll', this.props.changeScrollTopShow);
    }

}

const mapState = (state) => ({
    showScroll: state.getIn(['home','showScroll']),

})

const mapDispatch = (dispatch) => ({
    changeHomeData(){
        dispatch(actionCreators.getHomeInfo());
    },
    changeScrollTopShow(){
        if ( document.documentElement.scrollTop > 400) {
            dispatch(actionCreators.toggleTopShow(true));
        }else {
            dispatch(actionCreators.toggleTopShow(false));
        }
    },
    changePageType(pageType){
        dispatch(headerActionCreators.changePageType(pageType));
    },
    getWriterList(){
        dispatch(actionCreators.getWriterList());
    }
});
export default connect(mapState, mapDispatch)(Home);