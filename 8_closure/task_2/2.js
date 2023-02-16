//2. Написать функцию makeCounter, которая возвращает функцию, внутри которой увеличивается 
//сохраненный каким-то образом ранее счетчик.

const makeCounter = () =>{
let count = 0;
  return () => count++;
}
let counter = makeCounter();
let counter2 = makeCounter();
console.log(counter());
console.log(counter());

console.log(counter2());
console.log(counter2());