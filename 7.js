/*
1. Повторите поведение страницы по данному образцу. Координаты должны меняться и 
зависеть от положения курсора мыши на в области
*/

<input style="width: 300px; height: 200px;" class="task_1"></input>
let input_task1 = document.querySelector('.task_1');

input_task1.addEventListener('mousemove', (event) => {
  input_task1.value = `X: ${event.clientX} Y: ${event.clientY}`;
});