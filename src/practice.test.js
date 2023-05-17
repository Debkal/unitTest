import {capitalize,reverse,Calc,caesarModule,analyze} from './practice.js';
const calculator = new Calc();
const caesar = new caesarModule();

it('Capitalize', () => {
    expect(capitalize('bread')).toMatch(/^[A-Z]+[a-zA-Z]*$/);
})

it('reverseString', () => {
    expect(reverse('aA')).toBe('Aa');
})
it('reverseString space',() => {
    expect(reverse('apple pancake')).toBe('ekacnap elppa');
});

it('calculator addition', () => {
    expect(calculator.add(5,5)).toBe(10);
})
it('calculator subtraction', () => {
    expect(calculator.sub(5,2)).toBe(3);
});
it('calculator multiplication', () => {
    expect(calculator.mult(5,3)).toBe(15);
});
it('calculator division', () => {
    expect(calculator.divide(10,2)).toBe(5);
});
it('calc divison decimal', () => {
    expect(calculator.divide(10,3)).toBeCloseTo(3.333); 
})

it('caesar', () => {
    expect(caesar.encrypt('Hello',13)).toBe('Uryyb');
});
it('caesar punctuation', () => {
    expect(caesar.encrypt('goodtimes, are bad. forLongtime!',13)).toBe('tbbqgvzrf, ner onq. sbeYbatgvzr!')
});
it('array anaylsis', () => {
    expect(analyze([1,8,3,4,2,6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    })
    })