// https://leetcode-cn.com/problems/reverse-words-in-a-string-iii/
// 557. 反转字符串中的单词 III

// export default (str)=>{
//     // 字符串按空格进行分割;
//     let arr = str.split(' ');
//     // 遍历数组, 反转数组中的元素
//     let result = arr.map(item =>{
//         // 字符串转换成数组，然后反转，最后再转换成字符串;
//         return item.split('').reverse().join('');
//     });
//     return result.join(' ');
// }

// export default (str)=>{
//     // 字符串按空格进行分割;
//     // 遍历数组, 反转数组中的元素
//     return str.split(' ').map(item =>{
//         return item.split('').reverse().join('');
//     }).join(' ');
// }

// 在split 中使用正则
// export default (str)=>{
//     // 字符串按空格进行分割;
//     // 遍历数组, 反转数组中的元素
//     return str.split(/\s/g).map(item =>{
//         return item.split('').reverse().join('');
//     }).join(' ');
// }

// match
export default (str)=>{
    // match 识别字符串和'   [\w'];
    // 遍历数组, 反转数组中的元素
    return str.match(/[\w']+/g).map(item =>{
        return item.split('').reverse().join('');
    }).join(' ');
}