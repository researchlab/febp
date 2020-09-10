// https://leetcode-cn.com/problems/regular-expression-matching/

export default (str,mode) =>{
    // '*' 匹配零个或多个前面的那一个元素
    // 将 a*aaaaa 处理成 a*
    mode = mode.replace(/([a-z])\*\1+/,"$1*")
    // 对模式变量进行正则刷选
    let modeArr = mode.match(/([a-z.]\*)|([a-z.]+(?=([a-z.]\*)|$))/g)
    let cur = 0
    let modeFlag = ''
    let strLen = str.length
    for (let i = 0, len = modeArr.length,m; i < len; i++){
        // 对于模式分为三类: .*|a*|cdef
        m = modeArr[i].split('')
        // 如果第二位是* 表示是有模式的
        if(m[1] === '*'){
            if (m[0] === '.'){
                cur = strLen
                // if (i !== len -1 ){ // 表示mode最后还有字符串 但是 s 已经被mode当前的.* 全部匹配完毕，所以剩下的mode不能匹配，返回false
                //     return false
                // }
                // break
                modeFlag=str[cur]  //当出现.*后， mode后面的项目如果能匹配最后一个str项 也是对的;
            }else{
                while (str[cur] === m[0]){
                    modeFlag = m[0]
                    cur++
                }
            }
        }else {
            for (let j=0,jl = m.length; j < jl; j++){
                if ( m[j] == modeFlag && modeFlag !== ''){
                }else if (m[j] !== str[cur] && m[j] !== '.'){
                    return false
                }else{
                    if (cur != strLen){
                        cur++
                    }
                }
            }
        }
    }
    return cur === strLen;
}