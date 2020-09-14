import knapsack from '../code/1002.business';

test('knapsack:data,12',()=>{
    let data = [
        [8,3,4],
        
        [6,2,2],
        [4,1,2]
    ]
    expect(knapsack(data)).toBe(12)
})

test('knapsack:data,22',()=>{
    let data = [
        [8,5,9],
        [4,1,2],
        [6,1,2],
        [6,2,2],
        [8,3,4]
    ]
    expect(knapsack(data)).toBe(22)
})

