/*
Перепишите код с использованием тернарного оператора

let country = 'Sweden';
let access;
if (country == 'Sweden') {
access = true;
} else{
access = false;
}
*/
let country = 'Sweden', access;
access = country == 'Sweden' ? true : false;

/*
Создать переменную и записать в нее число, например 10.
10 раз увеличить значение этой переменной на 1. Результат (1 шт.) вывести в консоль.
*/
let a = 10;
for(let i = 0; i < 10; i++) {
  a++;
}
console.log(a);