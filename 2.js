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

/*
Увеличивая счетчик цикла на 2, нужно 5 раз:
- запрашивать у пользователя ввод числа
- проверять, равно ли это число 10. Если равно, выводить "Равно 10". Иначе выводить "Не равно 10"
*/
for(let i = 0; i < 5; i += 2) {
  let num = prompt("Введите число");
  num === 10 ? "Равно 10" : "Не равно 10";
}

/*
Вывести в консоль квадраты чисел от 0 до 100 (не включая 100) - т.е. вывести числа 0, 1, 4, 9, 16...
* Задавать количество чисел, которые нужно вывести, при помощи функции prompt.
*/

let num = prompt("Введите число");
for(let i = 0; i < num; i++) {
  console.log(i ** 2);
}

/*
Напишите программу, которая выводит в консоль числа от 1 до 100.
При этом вместо чисел, кратных трем, программа должна выводить слово «Fizz», 
а вместо чисел, кратных пяти, — слово «Buzz». Если число кратно и 3, и 5, то программа должна выводить слово «FizzBuzz»
*/

for(i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz');
  } 
  else {
    if(i % 3 === 0) {
      console.log('Fizz');
    }
    if(i % 3 !== 0 && i % 5 === 0) {
      console.log('Buzz');
    }
  }
}

/*
Перепишите код, заменив цикл for на while, без изменения поведения цикла.
for (let i = 0; i < 3; i++) {
alert( `number ${i}!` );
}
*/

let i = 0;
while (i < 3) { 
  alert( `number ${i}!` );
  i++;
}

/*
Переписать задание 4 в виде функции. Т.е. описать функцию, 
которая выводит квадраты чисел из заданного диапазона (диапазон будет попадать в функцию как аргументы).
*/

const squar = num => {
  for(let i = 0; i < num; i++) {
    console.log(i ** 2);
  }
}

/*
Написать функцию, котрая возвращает строку - случайный цвет в формате rgb. Это будет строка вида "rgb(10,55,250)"
Здесь у вас будет две функции: одна ваша - getRandomRGB, а вторая - функция получения случайного числа в диапазоне min - max.
Вот эта функция (просто скопируйте, она уже готова):
function getRandomInteger(min, max) {
return Math.floor(Math.random() * (max - min)) + min;
}
Подсказка: 
Каждый цвет - 3 числа, каждое число лежит в диапазоне от 0 до 255. 
Одна функция может вызывать другую функцию
*/

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomRGB() {
  let arr = [];
  for(let i = 0; i < 3; i++) {
    arr.push(getRandomInteger(0, 255));
  }
  return `rgb(${arr.join(',')})`;
}