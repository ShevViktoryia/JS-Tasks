/*Задать массив имен. Задать функцию, которая принимает 3 параметра и выводит их в консоль.
Передать массив в функцию. Внутри функции каждый параметр должен быть равен одному из элементов массива. */

const names = ['John', 'Sam', 'Peter', 'Kate', 'Alex'];
function consoleElem(first = 'John', second = 'Alex', third = 'Sam') {
  [first, second, third] = [...names];
  console.log(first);
  console.log(second);
  console.log(third);
}

consoleElem(names);