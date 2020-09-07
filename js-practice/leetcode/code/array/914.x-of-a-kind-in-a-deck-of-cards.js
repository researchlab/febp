// https://leetcode-cn.com/problems/x-of-a-kind-in-a-deck-of-cards/

export default (arr) => {
   let group = [];
   // 排序
   arr.sort((a,b) => a - b);
   // 统计重复数字的个数
   // 注意考虑 [], [1] 的情况, i=0 i <= length -1;
   // 分组的时候 计数v = 1; 分组就有一个值，所以计算默认为1;
   for (let i = 0, il = arr.length, v = 1; i <= il -1; i++){
       if (arr[i] === arr[i+1]){
            v++;
       }else{
           group.push(v);
           v=1;
       }
   }
   //计算两个数的最大公约数;
   let gcd = (a,b) =>{
       if (b === 0){
           return a;
       }else {
           return gcd(b, a % b);
       }
   }
   // 思想：只要所有的分组具有最大公约数(大于1)就满足条件
   // 对所有的分组进行最大公约数验证，相邻两个分组的最大公约数，再与后面的公约数进行验证，以此类推，有一个最大公约数为1就退出
   while(group.length > 1){
       let a = group.shift();
       let b = group.shift();
       let v = gcd(a,b);
       if (v === 1){
           return false;
       }else{
           // 将前两个分组的最大公约数推进数组与下一个分组再次验证是否有最大公约数
           group.unshift(v);
       }
   }
   
   // 考虑边界['11']即只有一个分组的时候
   return group.length ? group[0]  > 1 : false;
}