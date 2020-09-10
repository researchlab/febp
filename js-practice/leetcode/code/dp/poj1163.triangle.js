// http://poj.org/problem?id=1163&lang=default&change=true

export default (arr, n) => {
    let maxSum = arr[n-1]
    console.log(maxSum)
    for ( let i = n-2; i >= 0; --i){
        for (let j = 0; j <= i; ++j){
            maxSum[j] = Math.max(maxSum[j],maxSum[j+1]) + arr[i][j]
        }
    }
    return maxSum[0]
}