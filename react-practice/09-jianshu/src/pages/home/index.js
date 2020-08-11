import React , { Component } from 'react';
import Topic from './components/Topic';
import Recommend from './components/Recommend';
import List from './components/List';
import Writer from './components/Writer';

import { 
    HomeWrapper,
    HomeLeft,
    HomeRight
 } from './style';

 import banner from '../../statics/banner.png';

class Home extends Component {
    render(){
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner-img' src={banner} alt="banner"/>
                    <Topic/>
                    <List/>
                </HomeLeft>
                <HomeRight>
                    <Recommend/>
                    <Writer/>
                </HomeRight>
            </HomeWrapper>
        )
    }
}

export default Home;