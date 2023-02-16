// 1. Написать функцию makeCalculator, которая принимает число x 
// и возвращает функцию, которая возвращает произведение x на 2.

const makeCalculator = x => () => x * 2;
let calc = makeCalculator(2);
console.log(calc());