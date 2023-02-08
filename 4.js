//Написать функцию, которая принимает два параметра и складывает их.
//Предусмотреть проверку на тип данных. Если хоть один из параметров не является числом, должно выводиться ообщение об ошибке.
//Также обработайте случай, если не было введено два параметра.

function sum(a, b) {
  if(arguments.length < 2) {
    return 'введите два параметра';
  }
  else {
    if (typeof a !== 'number' || typeof b !== 'number') {
      return 'введенные данные не являются числами'}
    else { 
      return a + b;
    }
  }
}

//Измените функцию "square" так, чтобы в случае ее вызова без аргумента генерировалась консольная ошибка
//"Функция "square" не может быть вызвана без аргумента"

function square(a) {
  if(arguments.length == 0) {
    throw new Error('Функция "square" не может быть вызвана без аргумента');
  }
  console.log(a * a);
}

//Создать функцию "угадай число". Она принимает число от 1 до 10 (обязательно проверить, что число не больше 10 и не меньше 0). 
//Генерирует рандомное число от 1 до 10 и сравнивает с заданным числом.
//Если они совпали, то возвращает “Вы выиграли”, если нет - то “Вы не угадали, ваше число -  ...,  а выпало число ...”
//Функция создания случайного числа уже была ранее в материалах, в задаче по созданию случайного цвета.
//Написать функцию в стрелочном синтаксисе.

const guessNumber = num => {
  if(0 <= num && num <= 10) {
    let random_num = Math.floor(Math.random() * 10) + 1;
    if (random_num === num) {
      return '“Вы выиграли”';
    }
    else {
      return "“Вы не угадали, ваше число " + `${num}` + ", а выпало число "+ `${random_num}` + "”";
    }
  }
  else {
    return "Выберите другое число";
  }
}

//Определить массив, например let arr = [5, 4, 3, 8, 0];
//Создать функцию filterFor(arr, a). Функция должна вернуть новый массив из элементов arr, но в нем должны содержаться элементы,
// которые больше или равны (>=) значения переменной a.
//Например, запуск функции filterFor(arr, 5) дает результат [5,8]
//запуск функции filterFor(arr, 10) дает результат []
//запуск функции filterFor(arr, 3.11) дает результат [4,5,8]
let arr = [5, 4, 3, 8, 0];
const filterFor = (arr, a) => {
  return arr.filter(item => item >= a);
}
filterFor(arr, 5);

//Напишите функцию copyArr(arr), которая копирует массив, не изменяя оригинал. Используйте подходящий метод массива.
const copyArr = arr => [].concat(arr);

//Создайте функцию sumObjectValues, которая будет суммировать все значения свойств, которые являются числами. 
//Сумму чисел необходимо вернуть из функции.

const objectWithNumbers = {
  a: 10,
  b: 20,
  c: 'string',
  d: 12,
}
const sumObjectValues = obj => {
  let sum = 0;
  for(let key of Object.values(obj)) {
    if(typeof key == 'number') {
      sum += key;
    }
  }
  return sum;
}
sumObjectValues(objectWithNumbers);