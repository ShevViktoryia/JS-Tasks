let req = new XMLHttpRequest();
req.onload = function () {
  const div = document.createElement('div');
  div.innerHTML = JSON.parse(req.responseText).title;
  document.body.appendChild(div);
}
req.open("GET", 'https://jsonplaceholder.typicode.com/todos/1');
req.send();