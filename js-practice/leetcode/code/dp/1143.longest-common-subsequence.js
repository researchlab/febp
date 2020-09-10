// https://leetcode-cn.com/problems/longest-common-subsequence/

// 时间复杂度 O(m*n), 空间复杂度 O(m*n)
export default (s1,s2) => {
    let n = s1.length;
    let m = s2.length;
    let dp = Array.from(new Array(n+1), ()=> new Array(m+1).fill(0))
    // dp x = 0 行， y = 0 列 初始化为0，为空子序列;
    // i = 1, j = 1开始， 则s1, s2的取值从 i-1, j-1; 
    for (let i = 1; i<=n; i++){
        for (let j = 1; j <= m; j++){
            if (s1[i-1] === s2[j-1]){
                dp[i][j] = dp[i-1][j-1]+1
            }else {
                dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1])
            }
        }
    }
    return dp[n][m]
}

