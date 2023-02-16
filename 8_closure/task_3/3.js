//3. Написать функцию startsWith, которая принимает 2 строки и проверяет, 
//начинается ли первая строка с символов второй строки. Функция возвращает true или false.

const startsWith = (str1, str2) => {
  return () => str1.includes(str2, 0);
}
let res = startsWith('Homer', 'Home');
console.log(res());