import React, { PureComponent } from 'react';
import { actionCreators as headerActionCreators } from '../../common/header/store';
import { constants as headerConstants } from '../../common/header/store';
import { connect } from 'react-redux';
import {
    DownloadWrapper,
    Row,
    TopSection,
    TopLogo,
    TopInfo,
    TopQrCode
} from './style';

class Download extends PureComponent{
    render(){
        return (
            <DownloadWrapper>
                <Row>
                <TopSection>
                    <TopLogo>
                        <img src="https://cdn2.jianshu.io/assets/web/misc-logo-805143ddec2e594416e891df316a73a7.png" alt='jianshu'/>
                        <TopInfo>
                            <div className="title">创作你的创作</div>
                            <div className="slogan">一个优质的创作社区</div>
                        </TopInfo>
                    </TopLogo>
                    <img src="https://cdn2.jianshu.io/assets/web/misc-background-2bd0f42d30ede727ef60751e6572e740.png"
                    alt="background"
                    className="background-pic"
                    />
                    <img src="https://cdn2.jianshu.io/assets/web/misc-phone-7dfef21cef3585139d67481fbeb3a488.png"
                    alt="phone-img"
                    className="phone-img"
                    />
                    <TopQrCode>
                        <img src="https://cdn2.jianshu.io/assets/web/download-apps-page-top-qrcode-5569b135d8256ab92761d87705c525d2.png"
                        alt="qrcode"/>
                        <div className="title">扫码下载简书App</div>
                        <div className="description">随时随地发现和创作内容</div>
                    </TopQrCode>
                </TopSection>
                <div className='row-bottom'></div>
                </Row>
            </DownloadWrapper>
        )
    }
    componentDidMount(){
        this.props.changePageType(headerConstants.DOWNLOAD_PAGE);
    }
    componentWillUnmount(){
        this.props.changePageType('');
    }
}

const mapDispatch = (dispatch) =>({
    changePageType(pageType){
        dispatch(headerActionCreators.changePageType(pageType));
    }
})
export default connect(null, mapDispatch)(Download);