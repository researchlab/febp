import LCS from '../../code/dp/1143.longest-common-subsequence';

test('LCS:abcde ace 3',()=>{
    expect(LCS("abcde","ace")).toBe(3)
})

test('LCS:abc abc 3',()=>{
    expect(LCS("abc","abc")).toBe(3)
})

test('LCS:abc def 0',()=>{
    expect(LCS("abc","def")).toBe(0)
})