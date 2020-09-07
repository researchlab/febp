import telComb from '../../code/array/17.letter-combinations-of-a-phone-number';

test('telComb:23',()=>{
    expect(telComb("23")).toEqual(["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"])
});

test('telComb:""',()=>{
    expect(telComb('')).toEqual([]);
})

test('telComb:2',()=>{
    expect(telComb('2')).toEqual(["a","b","c"]);
})