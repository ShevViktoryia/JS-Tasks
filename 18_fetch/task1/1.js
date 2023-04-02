/*
1.1. Добавить в html кнопку «Получить эмодзи дня», под ней пустой див для результата. 
По нажатию кнопки отправлять запрос за рандомным эмодзи, отобразить его в диве под кнопкой,
 размером примерно 70px (это можно сделать с помощью CSS-свойства font-size).

1.2. Отправить запрос за всеми эмодзи, разместить их на странице по категориям
*/

const button = document.createElement('button');
button.textContent = 'Получить эмодзи дня';
document.body.append(button);

const div = document.createElement('div');
div.className = 'randomEmoji';
document.body.append(div);

button.onclick = () => {
  fetch('https://api.emojisworld.fr/v1/random', {
    headers: {
      Accept: "application/json"
    }
  })
  .then(response => response.json())
  .then(data => 
    {
      div.textContent = '';
      div.textContent = data.results[0].emoji;
    });
}

fetch('https://api.emojisworld.fr/v1/popular?&categories=10,9,7,8,6,5,4,3,2,1', {
  headers: {
    Accept: "application/json"
  }
})
.then(response => response.json())
.then(data => {
  const block = document.createElement('div');
  block.className = 'block';
  document.body.append(block);
  let arrNames = [];
  for(let i = 0; i < data.results.length; i++) {
    const category = document.createElement('div');
    category.className = 'category';

    const header = document.createElement('h1');
    header.className = 'header';
    const emojiGroup = document.createElement('div');
    emojiGroup.id = 'add';

    if(!arrNames.includes(data.results[i].category.name)) {
      arrNames.push(data.results[i].category.name);
      header.textContent = data.results[i].category.name;
      emojiGroup.className = `${data.results[i].category.name}`;

      category.append(header);
      category.append(emojiGroup);
      block.append(category);
    }

    const addClass = document.querySelectorAll('#add');
    for(let j = 0; j < addClass.length; j++) {
      data.results.forEach(item => {
        switch(item.category.name) {
          case `${addClass[j].className}`:
            if(emojiGroup.className == addClass[j].className) {
              emojiGroup.append(item.emoji);
            }
            break;
          default:
            break;
        }
      });
    }
  }
});

// fetch('https://api.emojisworld.fr/v1/popular', {
//   headers: {
//     Accept: "application/json"
//   }
// })
// .then(response => response.json())
// .then(data => {
  
// });