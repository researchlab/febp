import { fromJS } from 'immutable';

const defaultState = fromJS({
   topicList: [{
       id: 1,
       title: "社会热点",
       imgUrl: "http://upload.jianshu.io/collections/images/261938/man-hands-reading-boy-large.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
   },
   {
    id: 2,
    title: "社会热点",
    imgUrl: "http://upload.jianshu.io/collections/images/261938/man-hands-reading-boy-large.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
},
{
    id: 3,
    title: "社会热点",
    imgUrl: "http://upload.jianshu.io/collections/images/261938/man-hands-reading-boy-large.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
},
{
 id: 4,
 title: "社会热点",
 imgUrl: "http://upload.jianshu.io/collections/images/261938/man-hands-reading-boy-large.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
},
{
    id: 5,
    title: "社会热点",
    imgUrl: "http://upload.jianshu.io/collections/images/261938/man-hands-reading-boy-large.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
},
{
 id: 6,
 title: "社会热点",
 imgUrl: "http://upload.jianshu.io/collections/images/261938/man-hands-reading-boy-large.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
},
{
 id: 7,
 title: "社会热点",
 imgUrl: "http://upload.jianshu.io/collections/images/261938/man-hands-reading-boy-large.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
},
{
id: 8,
title: "社会热点",
imgUrl: "http://upload.jianshu.io/collections/images/261938/man-hands-reading-boy-large.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
}
],
articleList: [{
    id: 1,
    title: "胡歌12年后首谈中国歌王争霸赛",
    desc: "那一年, 胡歌12年后首谈中国歌王争霸赛,胡歌12年后首谈中国歌王争霸赛,胡歌12年后首谈中国歌王争霸赛,胡歌12年后首谈中国歌王争霸赛,胡歌12年后首谈中国歌王争霸赛",
    imgUrl: "https://upload-images.jianshu.io/upload_images/2259045-2986b9be86b01f63?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
},
{
    id: 2,
    title: "胡歌12年后首谈中国歌王争霸赛",
    desc: "那一年, 胡歌12年后首谈中国歌王争霸赛,胡歌12年后首谈中国歌王争霸赛,胡歌12年后首谈中国歌王争霸赛,胡歌12年后首谈中国歌王争霸赛,胡歌12年后首谈中国歌王争霸赛",
    imgUrl: "https://upload-images.jianshu.io/upload_images/2259045-2986b9be86b01f63?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
},
{
    id: 3,
    title: "胡歌12年后首谈中国歌王争霸赛",
    desc: "那一年, 胡歌12年后首谈中国歌王争霸赛,胡歌12年后首谈中国歌王争霸赛,胡歌12年后首谈中国歌王争霸赛,胡歌12年后首谈中国歌王争霸赛,胡歌12年后首谈中国歌王争霸赛",
    imgUrl: "https://upload-images.jianshu.io/upload_images/2259045-2986b9be86b01f63?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
}
]
});

export default (state = defaultState, action) => {
    switch (action.type){
        default:
            return state;
    }
    
}
