// https://leetcode-cn.com/problems/repeated-substring-pattern/

export default (str) => {
    let reg = /^(\w+)\1+$/
    return reg.test(str);
}