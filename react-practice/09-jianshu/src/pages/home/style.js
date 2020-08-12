import styled from 'styled-components';

export const HomeWrapper = styled.div`
    overflow: hidden;    
    width: 960px;
    margin: 0 auto;
`;


export const HomeLeft = styled.div`
    float: left;
    margin-left: 15px;
    padding-top: 30px;
    width: 625px;
    .banner-img{
        width: 625px;
        height: 270px;
    }
`;

export const HomeRight = styled.div`
    width: 290px;
    float: right;
    padding: 30px 0 0;
    margin-left: 25px;
`;

export const TopicWrapper = styled.div`
    padding: 20px 0 10px 0;
    overflow: hidden;
    border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
    float: left;
    height: 32px;
    line-height:32px;
    padding-right: 10px;
    margin-right: 15px;
    margin-bottom: 18px;
    font-size: 14px;
    background: #f7f7f7;
    border: 1px solid #dcdcdc;
    color: #000;
    border-radius: 4px;
    cursor: pointer;
    .topic-pic {
        display: block;
        float: left;
        width: 32px;
        height: 32px;
        margin-right:10px;
    }
`;

export const ListItem = styled.div`
    overflow: hidden;
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    .list-pic {
        display: block;
        float: right;
        width: 125px;
        height:100px;
        border-radius: 10px;
    }
`;

export const ListInfo = styled.div`
    width: 500px;
    float: left;
    .title {
        font-size: 18px;
        line-height: 27px;
        font-weight: bold;
        margin-bottom: 10px;
        color: #333;
    }
    .desc {
        line-height: 24px;
        font-size: 13px;
        color: #999;
    }
`;

export const RecommendWrapper = styled.div`
    margin: 0 0 6px;
    padding: 0 0 0px;

    .pic{
        width: 280px;
        height: 50px;
        margin-bottom: 6px;
        border-radius: 4px;
        border: 0px;
        box-sizing: border-box;
    }
    a{
        cursor: pointer;
    }
`;

export const DownloadWrapper = styled.div`
`;

export const DownloadQRCode = styled.div`
    text-align: center;
    margin-top: -125px;
    margin-bottom: -10px;
    img{
        border: 1px solid #999;
        border-radius: 6px;
        padding: 5px;
        background-color: #fff;
        with: 120px;
        height: 120px;
        box-shadow: 0 0 8px rgba(0,0,0,.2);
    }
`;

export const DownloadDesc = styled.a`
    display: block; 
    width: 235px;  
    overflow: hidden;
    cursor: pointer;
    color: #333;
    &.aside{
        border: 1px solid #f0f0f0;
        border-radius: 6px;
        margin-bottom:30px;
        padding: 10px 22px;
        background-color: #fff;
    }
    img {
        border: 0;
        vertical-align: middle;
        float: left;
    }
    .qrcode {
        width: 60px;
        height: 60px;
        opactiy: 0.85;
    }
    .info{
        display: inline-block;
        vertical-align: middle;
        margin-left: 7px;
        margin-top: 16px;
    }
    .title{
        font-size: 15px;
        color: #333;
    }
    .desc{
        font-size: 13px;
        color:#999;
        margin: 4px 0 0;
    }
`;

export const RecommenderWrapper = styled.div`
    margin: -5px 0 0;
    padding: 0 0 5px;
    width: 280px;
`;

// export const RecommenderItem = styled.div`
//     with: 280px;
//     height: 50px;
//     cursor: pointer;
//     margin-bottom: 6px;
//     border-radius: 4px;
//     border: 0px;
//     background: url(${(props) => props.imgUrl});
//     background-size: contain;
// `;

// 写法2
export const RecommenderItem = styled.div.attrs({
    background: props => "url("+props.imgUrl+")"
})`
    with: 280px;
    height: 50px;
    cursor: pointer;
    margin-bottom: 6px;
    border-radius: 4px;
    border: 0px;
    background-size: contain;
`;