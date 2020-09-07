// https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/

export default (str) => {
    // 建立电话号码键盘映射, 下标对应字母
    let map = ['',1,'abc','def','ghi','jkl','mno','pqrs','tuv','wxyz'];
    // 分割输入字符串; 234 => [2,3,4]
    let num = str.split('');
    // 保存键盘映射后的字母内容; 23 =>['abc','def']
    let code = [];
    num.forEach(item =>{
        if(map[item]){
            code.push(map[item])
        }
    })
    let comb = (arr) =>{
        let tmp = [];
        for(let i =0, il=arr[0].length;i<il;i++){
            for (let j =0, jl = arr[1].length;j<jl;j++){
                tmp.push(`${arr[0][i]}${arr[1][j]}`)
            }
        }
        arr.splice(0,2,tmp);
        if (arr.length >1){
            comb(arr);
        }else{
            return tmp;
        }
        return arr[0];
    }
    if (code.length == 0 ){
        return [];
    }else if (code.length == 1){
        return code[0].split('');
    }
    return comb(code);
}