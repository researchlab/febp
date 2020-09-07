// export default (str) => {
//     let r = [];
//     // 给定任意子输入都返回第一个符合条件的子串;
//     let match = (str) => {
//         // 返回开始为0 或1 且多个0或1的子串;
//         // 如  str=00110011  j=00;
//         let j = str.match(/^(0+|1+)/)[0];
//         // 生成与j 相同长度的另一个字符, 如 j=00, 则 o=11, 如 j=1,则o=0;
//         let o = (j[0] ^ 1).toString().repeat(j.length);
//         // 正则表达式
//         // 如 j=00, o=11 , 则 `^(0011)`
//         let reg = new RegExp(`^(${j}${o})`)
//         // 检查str 是否匹配正则表达式
//         if (reg.test(str)){
//             // 返回第一个子表达式匹配的内容, 子表达式以()为单位;
//             return RegExp.$1;
//         }else{
//             return '';
//         }
//     };
//     for (let i = 0, len = str.length -1; i<len; i++){
//         let sub = match(str.slice(i))
//         if (sub){
//             r.push(sub)
//         }
//     }
//     return r;
// }

export default (str) => {
    let ptr = 0, n = str.length, last = 0, ans = 0;
    while(ptr < n){
        const c = str.charAt(ptr);
        let count = 0; 
        while (ptr <n && str.charAt(ptr) === c){
            ++ptr;
            ++count;
        }
        ans += Math.min(count, last);
        last = count;
    }
    return ans;
}