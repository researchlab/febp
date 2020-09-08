// https://leetcode-cn.com/problems/can-place-flowers/

// 考虑边界
// export default (arr, n) => {
//     if (arr.length === 1 && arr[0] === 0 && n === 1){  // length == 1
//         return true;
//     }
//     let max = 0;

//     for ( let i =0, len = arr.length -1; i<=len; i++){ // 适应于 length > 1 
//         if (arr[i] === 0){
//             if (i === 0 && arr[1] === 0){ // 左边界
//                 max++;
//                 i++; // 跳过下一个位置 如 当前i=2 可以种植, 则i++ 为3不可以种植, 再加上for循环的i++, 下个循环的i = 4； 
//             }else if (i === len  && arr[i-1] ===0){ // 右边界
//                 max++;
//             }else if (arr[i-1] === 0 && arr[i+1] === 0){
//                 max++;
//                 i++;
//             }
//         }
//     }
//     return max >= n;
// }

// 防御式编程思想：在 flowerbed 数组两端各增加一个 0， 这样处理的好处在于不用考虑边界条件，任意位置处只要连续出现三个 0 就可以栽上一棵花。
export default (arr, n) => {
    //数组头部补0;
    arr.unshift(0);
    //数组尾部补0;
    arr.push(0);
    for (let i = 1, len = arr.length-1; i < len; i++){
        //连续出现3个0 栽花一朵;
        if (arr[i-1] === 0 && arr[i] === 0 && arr[i+1] === 0){
            arr[i] = 1; //栽花一朵;
            n--; // 减少一朵;
            i++; // 跳过下一个位置;
        }
    }
    return n <= 0;
}