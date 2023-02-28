/*1)Задать объект с полем name.

Задать переменную, которая будет хранить JSON упомянутого объекта.

Задать переменную, которая будет хранить результат парсинга предыдущей переменной.

2)Создать переменную user, в которой хранится объект.

Записать переменную в localStorage.

Создать переменную newUser, в которой будет храниться JS объект из localStorage.
 */

const obj = {name: 'John'};
const json = JSON.stringify(obj);
const prs = JSON.parse(json);

localStorage.user = {name: "John"};
let newUser = JSON.parse(JSON.stringify(localStorage.user));