import cardGroup from '../../code/array/914.x-of-a-kind-in-a-deck-of-cards';

test('cardGroup:[1,2,3,4,4,3,2,1]',()=>{
    expect(cardGroup([1,2,3,4,4,3,2,1])).toBe(true);
})

test('cardGroup:[1,1,1,2,2,2,3,3]',()=>{
    expect(cardGroup([1,1,1,2,2,2,3,3])).toBe(false);
})

test('cardGroup:[1]',()=>{
    expect(cardGroup([1])).toBe(false);
})

test('cardGroup:[1,1]',()=>{
    expect(cardGroup([1,1])).toBe(true);
})

test('cardGroup:[1,1,2,2,2,2]',()=>{
    expect(cardGroup([1,1,2,2,2,2])).toBe(true);
})

test('cardGroup:[]',()=>{
    expect(cardGroup([])).toBe(false);
})

test('cardGroup:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,8,8,8,9,9,9,10,10,10]',()=>{
    expect(cardGroup([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,8,8,8,9,9,9,10,10,10])).toBe(true);
})