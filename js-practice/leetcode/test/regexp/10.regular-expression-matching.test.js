import regModeStr from '../../code/regexp/10.regular-expression-matching';

// test('regModeStr:abcabc abc',()=>{
//     expect(regModeStr('abcabc','abc.*')).toBe(true)
// })

// test('regModeStr:aaabc a*bc',()=>{
//     expect(regModeStr('aaabc','a*bc')).toBe(true)
// })

// test('regModeStr:aaabc abc',()=>{
//     expect(regModeStr('aaabc','abc')).toBe(false)
// })

// test('regModeStr:aaabc a*.*',()=>{
//     expect(regModeStr('aaabc','a*.*')).toBe(true)
// })

// test('regModeStr:aaa ca*',()=>{
//     expect(regModeStr('aaa','ca*')).toBe(false)
// })

// test('regModeStr:aa a',()=>{
//     expect(regModeStr('aa','a')).toBe(false)
// })

// test('regModeStr:mississippi mis*is*ip*.',()=>{
//     expect(regModeStr('mississippi','mis*is*ip*.')).toBe(true)
// })

// test('regModeStr:ab .*c',()=>{
//     expect(regModeStr('ab','.*c')).toBe(false)
// })

// test('regModeStr:aaa a*a',()=>{
//     expect(regModeStr('aaa','a*a')).toBe(true)
// })

// test('regModeStr:aab c*a*b',()=>{
//     expect(regModeStr('aab','c*a*b')).toBe(true)
// })

// test('regModeStr:aaa ab*a*c*a',()=>{
//     expect(regModeStr('aaa','c*a*b*a*c*a')).toBe(true)
// })
// test('regModeStr:bbbba .*a*a',()=>{
//     expect(regModeStr('bbbba','.*a*a')).toBe(true)
// })

test('regModeStr:ab .*..',()=>{
    expect(regModeStr('ab','.*..')).toBe(true)
})