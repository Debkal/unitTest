import {capitalize,reverse,calc,caesar,analyze} from './practice.js';

it('Capitalize', () => {
    expect(capitalize('bread')).toMatch(/^[A-Z]+[a-zA-Z]*$/);
})

it('reverseString', () => {
    expect(reverse('aA')).toBe('Aa');
})
it('reverseString space',() => {
    expect(reverse('apple pancake')).toBe('ekacnap elppa');
});
/*
it('calculator addition', () => {
    expect(calc.add(5,5)).toBe(10);
})
it('calculator subtraction', () => {
    expect(calc.sub(5,2)).toBe(3);
});
it('calculator multiplication', () => {
    expect(calc.mult(5,3)).toBe(15);
});
it('calculator division', () => {
    expect(calc.divide(10,2)).toBe(5);
});
it('caesar', () => {
    expect(caesar('Hello',13)).toBe('Uryyb');
});
it('caesar punctuation', () => {
    expect(caesar('goodtimes, are bad. forLongtime!')).toBe('tbbqgvzrf, ner onq. sbeybatgvzr!')
});
it('array anaylsis', () => {
    expect(analyze([1,8,3,4,2,6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    })
    })
it('check if array', () => {
    expect(analyze(['1,8,3,4,2,'])).toBe('not an array');
})
*/