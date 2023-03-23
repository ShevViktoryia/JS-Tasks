/**
 *Запросом на сервер по url *https://jsonplaceholder.typicode.com/todos* достать задачи.
  Отобразить первые 20 задач списком ul на странице. Содержимое каждого li - поле title объекта задачи.
*/

let req = new XMLHttpRequest();
req.onload = function () {
  const ul = document.createElement('ul');
  for(let i = 0; i < 20; i++) {
    let li = document.createElement('li');
    li.innerHTML = JSON.parse(req.response)[i]["title"];
    ul.appendChild(li);
  }
  document.body.appendChild(ul);
}
req.open("GET", 'https://jsonplaceholder.typicode.com/todos');
req.send();