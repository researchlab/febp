// 二维dp
export default (events) => {
    // sort
    events.sort((x,y)=>{
        return x[2] - y[2]
    })
    // 事件数量, events.length 
    let n = events.length 
    // maxDeadline
    let maxDeadline = events[n-1][2]
    let knapsack = (T) =>{
        let dp = Array.from(new Array(n+1),()=> new Array(T+1).fill(0))
        for (let i = 1; i <=n; i++){
            for(let t = 1; t <=T; t++){
                let k = Math.min(t,events[i-1][2]) - events[i-1][1]
                if (k >= 0){
                    dp[i][t] = Math.max(dp[i-1][t],dp[i-1][k] + events[i-1][0])
                }else {
                    dp[i][t] = dp[i-1][t]
                }
            }
        }
        return dp[n][T];
    }
   
    return knapsack(maxDeadline)
}

// 一纬dp
// export default (events) =>{
//     events.sort((x,y)=>{
//         return x[2] - y[2]
//     })
//     let n = events.length
//     // dp[i] 表示 第i天的最大报酬;
//     // 边界1, 什么都不做的时候(即初始化之前, 没有事件可做的情况下，不管给多少天每天都没事干), 每天的最大报酬都是0;
//     // 边界2, max(i) = 事件之中单个截止时间最长的值(天数)
//     // 边界3, 假设所有的截止时间都是0天, 则最大报酬为0, 即i可以等于0, dp[0] = 0
//     let dp = new Array(events[n-1][2]+1).fill(0)
//     for (let i = 0; i < n; i++){
//         for (let t = events[i][2],cost = events[i][1]; t >= cost; t--){
//             dp[t] = Math.max(dp[t],dp[t-cost]+events[i][0])
//         }
//     }
//     // dp.sort((x,y)=>{
//     //     return y-x
//     // })
//     // console.log(dp)
    
//     return Math.max.apply(null,dp)
// }