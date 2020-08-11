import React, { Component } from 'react';
import {connect } from 'react-redux';
import {
    DownloadWrapper,
    DownloadDesc,
    DownloadQRCode
} from '../style';
import { setQrcode } from '../store/actionCreators';

class Download extends Component {
    render () {
        const { handleMouseEnter, handleMouseLeave } = this.props;
        return (
            <DownloadWrapper
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            >
                {this.getDownloadQrCode()}
                <DownloadDesc 
                className='aside' 
                >
                <img 
                src="https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-4130a7a6521701c4cb520ee6997d5fdb.png"
                alt="Download index side qrcode"
                className="qrcode"
                />
                <div className='info'>
                    <div className='title'>下载简书手机App</div>
                    <div className='desc'>随时随地发现和创作内容</div>
                </div>
            </DownloadDesc>
            </DownloadWrapper>   
        )
    }
    getDownloadQrCode = () => {
        const { qrCode } = this.props;
            if (qrCode) {
                return (
                <DownloadQRCode>
                <img 
                src="https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-4130a7a6521701c4cb520ee6997d5fdb.png"
                alt="Download index side qrcode"
                />
                </DownloadQRCode>
                )
            }
    }
}

const mapStatetoProps = (state) => ({
    qrCode: state.getIn(['home','qrCode'])
})
const mapDispatchtoProps = (dispatch) => {
    return {
        handleMouseEnter(){
            dispatch(setQrcode(true));
        },
        handleMouseLeave(){
            dispatch(setQrcode(false));
        }
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Download); 