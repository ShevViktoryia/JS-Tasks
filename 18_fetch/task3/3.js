function createCard(card, data) {
  const img = document.createElement('img');
  img.className = 'card-img-top';
  img.setAttribute('src' , `${data.flags.png}`);
  const card_body = document.createElement('div');
  card_body.className = 'card-body';
  const card_title = document.createElement('h5');
  card_title.className = 'card-title';
  card_title.textContent = data.name.official;
  const card_subtitle = document.createElement('h6');
  card_subtitle.className = 'card-subtitle';
  card_subtitle.textContent = data.continents;
  const card_population = document.createElement('p');
  card_population.className = 'card-text';
  card_population.textContent = (data.population / 10**6).toFixed(2) + ' млн';
  const card_languages = document.createElement('p');
  card_languages.className = 'card-text';
  for(let key in data.languages) {
    card_languages.textContent += `${data.languages[key]} `;
  }
  const card_cur = document.createElement('p');
  card_cur.className = 'card-text';
  for(let key in data.currencies) {
      card_cur.textContent += `${data.currencies[key]['symbol']} `+ `${data.currencies[key]['name']}`;
  }
  card.append(img);
  card_body.append(card_title);
  card_body.append(card_subtitle);
  card_body.append(card_population);
  card_body.append(card_languages);
  card_body.append(card_cur);
  card.append(card_body);
}

fetch('https://restcountries.com/v3.1/name/Spain', {
  headers: {
    Accept: "application/json"
  }
})
.then(response => response.json())
.then(data => {
  const container = document.querySelector('.container');
  
  const row = document.createElement('div');
  row.className = 'row';
  const col = document.createElement('div');
  col.className = 'col-4';
  for(j = 0; j < 1; j++) {
    const card = document.createElement('div');
    card.className = 'card';
    createCard(card, data[0]);
    col.append(card);
    row.append(col);
    container.append(row);
  }
  const borders = data[0].borders;
  borders.forEach(item => {
    fetch(`https://restcountries.com/v3.1/alpha/${item}`)
    .then(response => response.json())
    .then(data => {
      const container = document.querySelector('.container');
        const col = document.createElement('div');
        col.className = 'col-4';
        const card = document.createElement('div');
        card.className = 'card';
        card.style.width = '80%';
        createCard(card, data[0]);
        const card_header = document.createElement('h5');
        card_header.className = 'card-header';
        card_header.textContent = 'Соседняя страна';
        card.prepend(card_header);
        col.append(card);
        row.append(col);
        container.append(row);
    })
  });
});