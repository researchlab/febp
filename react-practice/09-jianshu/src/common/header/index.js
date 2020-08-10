import React from 'react';
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
    SearchWrapper
} from './style';

const Header = (props) => {
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
                    in={props.focused}
                    classNames='slide'
                    timeout={200}
                    >
                    <NavSearch
                    className={props.focused ? 'focused':''}
                    onFocus = {props.handleInputFocus} //聚焦
                    onBlur = {props.handleInputBlur} //失焦
                    ></NavSearch> 
                    </CSSTransition> 
                    <i className={props.focused ? 'focused iconfont':'iconfont'}>&#xe614;</i>                   
                </SearchWrapper>
            </Nav>
            <Addition>
                    <Button className='writting'><i className="iconfont">&#xe708;</i>写文章</Button>
                    <Button className='reg'>注册</Button>
            </Addition>
        </HeaderWrapper>
    );
}
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
        focused: state.header.get('focused') // immutable 对象 只能通过.get('属性名') 获取属性值; 
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        handleInputFocus(){
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur(){
            dispatch(actionCreators.searchBlur());
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header); 