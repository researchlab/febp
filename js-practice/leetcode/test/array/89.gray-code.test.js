import grayCode from '../../code/array/89.gray-code';

test('grayCode:1',()=>{
    expect(grayCode(2)).toEqual(['00','01','11','10'])
})

test('grayCode:0',()=>{
    expect(grayCode(0)).toEqual(['0'])
})