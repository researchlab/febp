import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';

import { actionCreators }  from './store';

import { 
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchInfoList
} from './style';

// 优化1 内容
//const getListArea = (show) => {
//    if (show) {
//        return (
//            <SearchInfo>
//                        <SearchInfoTitle>
//                            热门搜索
//                            <SearchInfoSwitch>换一批</SearchInfoSwitch>
//                        </SearchInfoTitle>
//                        <SearchInfoList>
//                            <SearchInfoItem>教育</SearchInfoItem>
//                            <SearchInfoItem>简书</SearchInfoItem>
//                            <SearchInfoItem>生活</SearchInfoItem>
//                            <SearchInfoItem>投稿</SearchInfoItem>
//                            <SearchInfoItem>历史</SearchInfoItem>
//                            <SearchInfoItem>PHP</SearchInfoItem>
//                            <SearchInfoItem>考研</SearchInfoItem>
//                            <SearchInfoItem>docker</SearchInfoItem>
//                            <SearchInfoItem>EOS</SearchInfoItem>
//                            <SearchInfoItem>微信小程序</SearchInfoItem>
//                        </SearchInfoList>
//                    </SearchInfo>            
//        )
//    }else {
//        return null;
//    }
//}

//优化2: 将函数组件 改成 普通组件 
class Header extends Component {
    render(){
        const { focused, list, handleInputFocus, handleInputBlur} = this.props;
        return (
            <HeaderWrapper>
                <Logo />
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>
                    <NavItem className='right'>登录</NavItem>
                    <NavItem className='right'>
                        <i className="iconfont">&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition 
                        in={focused}
                        classNames='slide'
                        timeout={200}
                        >
                        <NavSearch
                        className={focused ? 'focused':''}
                        onFocus = {() => {handleInputFocus(list)}} //聚焦
                        onBlur = {handleInputBlur} //失焦
                        ></NavSearch> 
                        </CSSTransition> 
                        <i className={focused ? 'focused iconfont zoom':'iconfont zoom'}>&#xe614;</i>
                        {this.getListArea()}    
                    </SearchWrapper>
                </Nav>
                <Addition>
                        <Button className='writting'><i className="iconfont">&#xe708;</i>写文章</Button>
                        <Button className='reg'>注册</Button>
                </Addition>
            </HeaderWrapper>
        );
    }

    getListArea = () => {
        const { focused , list, page, mouseIn, totalPage, handleMouseEnter, handleMouseLeave, handleChangePage} = this.props; 
        // immutable 对象的list  转换成一个普通的js对象  toJS();
        const newList =list.toJS();
        const pageList = [];
        if(newList.length){
            for (let i = (page - 1) * 10; i< page*10;i++){
                if (newList[i] != null){
                    pageList.push(
                        <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                    )
                }
            }
        }
        if (focused || mouseIn) {
            return (
                <SearchInfo 
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={() => {handleChangePage(page,totalPage, this.spinIcon)}}>
                        <i ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe606;</i>
                        换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {pageList}
                    </SearchInfoList>
                </SearchInfo>            
            )
        }else {
            return null;
        }
    }
}

//优化1: 将普通组件 改写成 函数组件
// const Header = (props) => {
//     return (
//         <HeaderWrapper>
//             <Logo />
//             <Nav>
//                 <NavItem className='left active'>首页</NavItem>
//                 <NavItem className='left'>下载App</NavItem>
//                 <NavItem className='right'>登录</NavItem>
//                 <NavItem className='right'>
//                     <i className="iconfont">&#xe636;</i>
//                 </NavItem>
//                 <SearchWrapper>
//                     <CSSTransition 
//                     in={props.focused}
//                     classNames='slide'
//                     timeout={200}
//                     >
//                     <NavSearch
//                     className={props.focused ? 'focused':''}
//                     onFocus = {props.handleInputFocus} //聚焦
//                     onBlur = {props.handleInputBlur} //失焦
//                     ></NavSearch> 
//                     </CSSTransition> 
//                     <i className={props.focused ? 'focused iconfont':'iconfont'}>&#xe614;</i>
//                     {getListArea(props.focused)}    
//                 </SearchWrapper>
//             </Nav>
//             <Addition>
//                     <Button className='writting'><i className="iconfont">&#xe708;</i>写文章</Button>
//                     <Button className='reg'>注册</Button>
//             </Addition>
//         </HeaderWrapper>
//     );
// }
// 原型1
// class Header extends Component{
//     render(){
//         return (
//             <HeaderWrapper>
//                 <Logo />
//                 <Nav>
//                     <NavItem className='left active'>首页</NavItem>
//                     <NavItem className='left'>下载App</NavItem>
//                     <NavItem className='right'>登录</NavItem>
//                     <NavItem className='right'>
//                         <i className="iconfont">&#xe636;</i>
//                     </NavItem>
//                     <SearchWrapper>
//                         <CSSTransition 
//                         in={this.props.focused}
//                         classNames='slide'
//                         timeout={200}
//                         >
//                         <NavSearch
//                         className={this.props.focused ? 'focused':''}
//                         onFocus = {this.props.handleInputFocus} //聚焦
//                         onBlur = {this.props.handleInputBlur} //失焦
//                         ></NavSearch> 
//                         </CSSTransition> 
//                         <i className={this.props.focused ? 'focused iconfont':'iconfont'}>&#xe614;</i>                   
//                     </SearchWrapper>
//                 </Nav>
//                 <Addition>
//                         <Button className='writting'><i className="iconfont">&#xe708;</i>写文章</Button>
//                         <Button className='reg'>注册</Button>
//                 </Addition>
//             </HeaderWrapper>
//         )
//     }
// }

const mapStateToProps = (state) =>{
    return {
        // focused: state.header.focused
        // state 是一个js对象; 通过.获取属性值;
        // state.header 是一个immutable 对象;  通过.get获取属性值;
        // focused: state.header.get('focused') // immutable 对象 只能通过.get('属性名') 获取属性值; 

        // state 变成了一个immutable对象 的使用方式; 
        // focused: state.get('header').get('focused')
        // 等价与下面的.getIn(['header','focused']) 意思是 取header 下面的focused的值; 
        focused: state.getIn(['header','focused']),
        list: state.getIn(['header','list']),
        page: state.getIn(['header','page']),
        mouseIn: state.getIn(['header','mouseIn']),
        totalPage: state.getIn(['header','totalPage'])
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        handleInputFocus(list){
            console.log(list);
            (list.size === 0) && dispatch(actionCreators.getList()); // 只有当list 没有数据才请求;
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur(){
            dispatch(actionCreators.searchBlur());
        },
        handleMouseEnter(){
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave(){
            dispatch(actionCreators.mouseLeave());
        },
        handleChangePage(page, totalPage, spin){
            // spin.style.transform = 'rotate(360deg)';
            let originAngle = spin.style.transform.replace(/[^0-9]/ig,'');
            if (originAngle) {
                originAngle = parseInt(originAngle,10);
            }else {
                originAngle = 0;
            }
            spin.style.transform = 'rotate('+(originAngle + 360)+'deg)';
            if ( page < totalPage ){
                dispatch(actionCreators.changePage(page + 1));
            }else {
                dispatch(actionCreators.changePage(1));
            }
            
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header); 