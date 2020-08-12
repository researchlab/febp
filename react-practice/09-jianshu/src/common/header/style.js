import styled from 'styled-components';

import logoPic from '../../statics/logo.png';  // webpack 会自动从这个路径找到这个图片 帮你打包到当前目录下； 

export const HeaderWrapper = styled.div`
    border-bottom: 1px solid #f0f0f0;
    background: #fff;
    
`;

export const HeaderNav = styled.div`
    position: relative;
    height: 56px;
    margin: 0 auto;
    min-width: 768px;
    max-width: 1440px;
`;

export const Logo = styled.div`
    position: absolute;
    top:0;
    left:0;
    display:block;
    width:100px;
    height:56px;
    background: url(${logoPic});
    background-size: contain;
`;

export const Nav = styled.div`
    width: 960px;
    height:100%;
    margin: 0 auto;
    padding-right:70px;
    box-sizing: border-box;
`;

export const NavItem = styled.div`
    line-height: 56px;
    padding: 0 15px;
    font-size: 17px;
    color: #333;
    &.left{
        float:left;
    }
    &.right{
        float:right;
        color: #969696;
    }
    &.active{
        color:#ea6f5a;
    }

`;

export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    width: 160px;
    height: 38px;
    border:none;
    outline: none;
    border-radius: 19px;
    background: #eee;
    margin-top:9px;
    padding: 0 30px 0px 20px;
    box-sizing: border-box;
    font-size:14px;
    margin-left:20px;
    color: #666;
    &::placeholder{
        color:#999;
    }
    &.focused {
        width: 240px;
    }
    &.slide-enter{
        width: 160px;
        transition: all .2s ease-out;
    }
    &.slide-enter-active{
        width: 240px;
    }
    &.slide-exit{
        transition: all .2s ease-out;
    }
    &.slide-exit-active{
        width: 160px;
    }
`;

export const Addition = styled.div`
    position:absolute;
    right:0;
    top:0;
    height:56px;
`;

export const Button = styled.div`
    float:right;
    line-height:38px;
    border-radius:19px;
    margin-top:9px;
    border:1px solid #ec6149;
    margin-right:20px;
    padding: 0 20px;
    font-size:14px;
    &.reg{
        color: #ec6149;
    }
    &.writting{
        color: #fff;
        background: #ec6149;
    }
`;

export const SearchWrapper = styled.div`
    position:relative;   
    float:left;
    .zoom {
        position: absolute;
        right:5px;
        bottom:5px;
        width:30px;
        line-height:30px;
        border-radius: 15px;
        text-align: center;
        &.focused {
            background: #777;
            color: #fff;
        }
    }
`;

export const SearchInfo = styled.div`
    position: absolute;
    left:0px;
    top: 56px;
    width: 240px;
    padding:0 20px;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
    background: #fff;
`;

export const SearchInfoTitle = styled.div`
    margin-top: 20px;
    margin-bottom: 15px;
    line-height:20px;
    font-size: 14px;
    color: #969696;
`;

export const SearchInfoSwitch = styled.span`
    float: right;
    font-size:13px;
    cursor: pointer;
    .spin{
        display: block;
        float: left;
        font-size: 13px;
        margin-right: 3px;
        transition: all .2s ease-in;
        transform-origin: center center;
    }
`;

export const SearchInfoItem = styled.a`
    font-size: 12px;
    padding: 0 5px;
    line-height: 20px;
    border: 1px solid #ddd;
    color: #787878;
    border-radius: 3px;
    display:block;
    float: left;
    margin-right: 10px;
    margin-bottom: 15px;
`;

export const SearchInfoList = styled.div`
    overflow:hidden;
`;