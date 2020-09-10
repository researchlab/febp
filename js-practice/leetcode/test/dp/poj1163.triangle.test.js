import Triangle from '../../code/dp/poj1163.triangle';


test('Triangle: data, 5',()=>{
    const data = [
        [7],
        [3,8],
        [8,1,0],
        [2,7,4,4],
        [4,5,2,6,5]
    ]
    expect(Triangle(data,5)).toBe(30)
})