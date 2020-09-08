// https://leetcode-cn.com/problems/gray-code/

export default (n) =>{
    // 递归函数 计算输入为n 的格雷编码序列
    let make = (n) =>{
        if (n === 0){
            return ['0']
        }else if (n === 1){
            return ['0','1']
        }else{
            let prev = make(n -1)
            let result = []
            let max = Math.pow(2,n)-1
            for (let i = 0, len = prev.length; i<len; i++){
                result[i]=`0${prev[i]}`  // 第一位加0 
                result[max-i] =`1${prev[i]}` // 对称位加1
            }
            return result
        }
    }
    // codes = make(n)
    // // 二进制转10进制
    // codes.map((item,index)=>{
    //     codes[index] = parseInt(item,2)
    // })
    return make(n)
}