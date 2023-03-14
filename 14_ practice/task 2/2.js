let button = document.querySelector('.change_theme');

button.addEventListener('click', () => {
  button.classList.toggle('dark-theme');
  if(button.classList.contains('dark-theme')) {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
    button.innerHTML = 'Светлая тема';
  }
  else {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
    button.innerHTML = 'Тёмная тема';
  }
});