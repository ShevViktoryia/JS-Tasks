function createCard(name, username, address, company, email) {
  const card_body = document.querySelector('.card-body');
  card_body.innerHTML = "";
  const card_title = document.createElement('h5');
  card_title.className = 'card-title';
  card_title.textContent = name;
  const card_subtitle = document.createElement('h6');
  card_subtitle.className = 'card-subtitle';
  card_subtitle.textContent = username;
  const card_text = document.createElement('p');
  card_text.className = 'card-text';
  for(let key in address) {
    if(typeof(address[key]) !== 'object') {
      card_text.textContent += `${key[0].toUpperCase() + key.slice(1)} : ${address[key]},` + ' ';
    }
    else {
      for(let k in address[key]) {
        card_text.textContent += `${k[0].toUpperCase() + k.slice(1)} : ${address[key][k]},` + ' ';
      }
    }
  }
  const card_company = document.createElement('p');
  card_company.className = 'card-text';
  card_company.textContent = company;
  const card_link = document.createElement('a');
  card_link.className = 'card-link';
  card_link.setAttribute('href', `mailto:${email}`);
  card_link.textContent = email;
  card_body.append(card_title);
  card_body.append(card_subtitle);
  card_body.append(card_text);
  card_body.append(card_company);
  card_body.append(card_link);
}

async function fetchJSON(url) {
  try {
    const result = await fetch(url);
    const data = await result.json();

    const list_group = document.querySelector('.list-group');
    data.forEach(item => {
      const li = document.createElement('li');
      li.className = 'list-group-item';
      li.textContent = item.name;
      li.id = item.id;
      list_group.append(li);
    });
  
    createCard(data[0].name, data[0].username, data[0].address, data[0].company.name, data[0].email);
    const names = document.querySelectorAll('.list-group-item');
    names.forEach(item => {
      item.addEventListener('click', event => {
        const cur_id = event.target.id-1;
        createCard(data[cur_id].name, data[cur_id].username, data[cur_id].address, data[cur_id].company.name, data[cur_id].email);
      })
    })
  } catch(error) {
    // throw new Error ("Error");
    console.log("Error: ", error);
  }
}

fetchJSON('https://jsonplaceholder.typicode.com/users');