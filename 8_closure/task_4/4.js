/*
4* Реализовать функционал модального окошка, которое открывается с затемнением фона при нажатии на кнопку
и закрывается по нажатию на кнопку-крестик или на тёмную область вокруг окошка.
ПОСЛЕДОВАТЕЛЬНОСТЬ РАБОТЫ:
1) HTML, CSS
Посмотрите видео, как подготовить верстку: [https://youtu.be/Zs-DMTCKYlI](https://youtu.be/Zs-DMTCKYlI)
2) JS
- Соберите в переменные необходимые элементы: кнопку для открытия окошка, 
само окошко вместе с фоном, окошко без фона, кнопку закрытия окошка.
- Повесьте обработчик клика на кнопку открытия - к окошку должен добавляться класс, 
в котором через CSS задана видимость блока.
Чтобы добавить класс к DOM-элементу, используется метод *element.classList.add('classname')*
- Повесьте обработчик клика на кнопку закрытия окошка - при этом должен удаляться класс, 
который добавляли в предыдущем обработчике.Чтобы удалить класс из DOM-элемента, используется 
метод *element.classList.remove('classname')*
- Повесьте обработчик клика на глобальный объект window, чтобы реализовать закрытие окошка по клику 
на тёмную область. Т.к. эта область является "оболочкой" окошка, мы должны проверить, была ли именно 
эта область целью клика (не центральная, основная часть окошка, а именно тёмная).
Для обращения к элементу, на который пришелся клик, можно использовать метод
*e.target* (e - это параметр функции-обработчика события, и его свойство target точно вказывает 
  на тот элемент, на который кликнул пользователь). 
*/

let popup_btn = document.getElementById('popup-btn');
let popup = document.getElementById('popup');
let popup_content = document.querySelector('.popup_content');
let close_popup = document.querySelector('.close_popup');

popup_btn.addEventListener('click', () => {
  popup.classList.add('opened');
});

close_popup.addEventListener('click', () => {
  popup.classList.remove('opened');
});

window.addEventListener('click', event => {
  if(event.target.classList.contains('opened')) {
    popup.classList.remove('opened');
  }
});