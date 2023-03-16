/*Задать массив имен. Задать функцию, которая принимает 3 параметра и выводит их в консоль.
Передать массив в функцию. Внутри функции каждый параметр должен быть равен одному из элементов массива. */

const names = ['John', 'Sam', 'Peter', 'Kate', 'Alex'];
function consoleElem(arr) {
  const [first, second, third] = arr;
  console.log(first);
  console.log(second);
  console.log(third);
}

consoleElem(names);

function consoleElem([first, second, third]) {
  console.log(first);
  console.log(second);
  console.log(third);
}

consoleElem(names);