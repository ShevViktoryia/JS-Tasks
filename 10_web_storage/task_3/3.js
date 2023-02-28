/*Разместить на странице несколько картинок. При клике на любую картинку она плавно
 становится на бэкграунд всей страницы, а тег картинки получает уникальные css-свойства 
 (чтобы было понятно, что сейчас эта картинка является выбранным элементом). При перезагрузке страницы 
 последнее выбранное состояние должно сохраниться, реализовать через LocalStorage.*/

const body = document.body;
let images_list = document.querySelector('.images_list');
localStorage.background ? body.style.background = localStorage.background : body.style.background = 'blue';

images_list.addEventListener('click', e => {
  if(e.target.currentSrc) {
    e.target.classList.add('active');
    body.style.background = `url(${e.target.currentSrc}) no-repeat`;
    body.style.backgroundSize = 'cover';
    localStorage.background = `url(${e.target.currentSrc}) no-repeat`;
  }
});