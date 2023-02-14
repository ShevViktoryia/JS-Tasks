/*
1. Повторите поведение страницы по данному образцу. Координаты должны меняться и 
зависеть от положения курсора мыши на в области
*/

<input style="width: 300px; height: 200px;" class="task_1"></input>
let input_task1 = document.querySelector('.task_1');

input_task1.addEventListener('mousemove', (event) => {
  input_task1.value = `X: ${event.clientX} Y: ${event.clientY}`;
});

/*
2. Повторите поведение страницы по данному образцу. При нажатии на 
область, красный квадрат его верхний левый угол доложен поместиться в ту координату, на которую вы нажали
*/

<input style="position: absolute; width: 400px; height: 300px;" class="task_2"></input>;
<div style="position: relative; z-index: 4; width: 50px; height: 50px; border: 1px solid red; left: 10px; top: 10px;" class="square"></div>

let input_task2 = document.querySelector('.task_2');
let square = document.querySelector('.square');

input_task2.addEventListener('click', (event) => {
  square.style.top = `${event.clientY}px`;
  square.style.left = `${event.clientX}px`;
});