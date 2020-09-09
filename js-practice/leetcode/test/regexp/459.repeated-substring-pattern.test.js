import subLoopStr from '../../code/regexp/459.repeated-substring-pattern';

test('subLoopStr',()=>{
    expect(subLoopStr('abcabc')).toBe(true)
})

test('subLoopStr',()=>{
    expect(subLoopStr('ababc')).toBe(false)
})