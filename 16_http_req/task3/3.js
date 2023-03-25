/*
Отобразить на странице 10 первых комментариев с сервера *https://jsonplaceholder.typicode.com/comments*

Оформить тегами как в [ПРИМЕРЕ](https://ucarecdn.com/f9cf39fd-9f6d-409f-8dd4-51e416480bdc/ScreenshotatNov30170836.png).

Порядок работы:

1) записать в переменную блок для отрисовки результата.

2) описать функцию отрисовки результата (напр. addInfo). Функция принимает 3 параметра - тег, содержимое и название класса для CSS. Она создает тег, наполняет его текстом, добавляет класс и помещает в блок на страницу.

3) создать http-запрос и получить результат в виде массива объектов (через JSON.parse). Записать этот результат в переменную, т.к. с ним будем дальше работать.

4) внутри функции .onload:

- обойти через цикл первые 10 элементов массива

- вызвать функцию addInfo 3 раза: для добавления на страницу имени, имейла и комментария.

5) прописать CSS для классов.
*/
function addInfo(tag, content, name) {
  const t = document.createElement(`${tag}`);
  t.className = `${name}`;
  t.textContent = `${content}`;
  div.appendChild(t);
}
const div = document.createElement('div');
div.className = 'result';
let req = new XMLHttpRequest();
req.onload = function () {
  const comments = JSON.parse(req.response);
  for(let i = 0; i < 10; i++) {
    addInfo('h3', comments[i]["name"], 'name');
    addInfo('p', comments[i]["email"], 'email');
    addInfo('p', comments[i]["body"], 'body');
  }
  document.body.appendChild(div);
}
req.open("GET", 'https://jsonplaceholder.typicode.com/comments');
req.send();