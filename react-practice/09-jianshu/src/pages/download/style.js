import styled from 'styled-components';

export const DownloadWrapper = styled.div`
    padding: 0 15px;
`;

export const Row = styled.div`
    margin: 0 -15px;
    .row-bottom{
            background-image: linear-gradient(0deg,hsla(0,0%,59%,.15),hsla(0,0%,59%,0));
            width: 100%;
            height: 50px;
            margin-top: -50px;
    }
`;
export const TopSection = styled.div`
    width: 960px;
    margin: 0 auto;
    margin-top: 50px;
    text-align: center;
    .background-pic{
        width: 765px;
        height: 172px;
        z-index: -1;
        margin-top: -65px;
    }
    .phone-img{
        width: 410px;
        height: 314px;
        vertical-align: middle;
        border: 0;
        margin-left: -150px;
        margin-top: -180px;
    }
`;

export const TopLogo = styled.div`
    display:inline-block;
    vertical-align: middle;
    box-sizing: border-box;
    overflow: hidden;
\    img{
        width: 100px;
        height: 100px;
        border: 0;
    }
`;

export const TopInfo = styled.div`
    display: inline-block;
    margin-left: 20px;
    text-align: left;
    color: #333;
    vertical-align: 20px;
    .title{
        font-size: 30px;
        line-height: 30px;
        margin-top: 12px;
    }
    .slogan{
        margin-top: 10px;
        font-size: 24px;
        line-height: 24px;
        font-weight: 300;
    }
`;
export const TopQrCode = styled.div`
    display:inline-block;
    margin-left: 30px;
    img{
        width: 140px;
        height: 140px;
        vertical-align: middle;
    }
    .title{
        margin-top: 10px;
        margin-left: 35px;
        font-size: 24px;
    }
    .description{
        margin-top: 10px;
        font-size: 16px;
        font-weight: 300;
        margin-left: 30px;
    }
`;