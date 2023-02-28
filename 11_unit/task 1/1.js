/*Задать массив имен. Создать 2 переменные, которые будут хранить первых 2 имени,
 вывести их в консоль. Создать массив, который будет хранить остальные имена, 
 вывести имена из него по одному в консоль. Если кол-во элементов остаточного массива меньше 2, 
 то вторая переменная должна стать равна "alex". */

const names = ['John', 'Sam', 'Peter'];

let [first, second, ...rest] = names;
console.log("first: ", first);
console.log("second: ", second);

for(let i = 0; i < rest.length; i++) {
  if(rest.length < 2) {
    rest[1] = 'alex';
  }
  console.log(`rest ${i}: `,rest[i]);
}