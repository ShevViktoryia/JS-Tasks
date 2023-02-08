//Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.
//Вам понадобятся методы строк.

const ucFirst = str => str.charAt(0).toUpperCase() + str.slice(1);

//Напишите функцию checkSpam(str), возвращающую true, если str содержит 'badWord' или 'XXX', а иначе false.
//Функция должна быть нечувствительна к регистру.

const checkSpam = str => {
  const substr1 = 'badWord', substr2 = 'XXX';

  return (str.toLowerCase().includes(substr1.toLowerCase()) || str.toLowerCase().includes(substr2.toLowerCase()));
}

//Написать функцию, которой на вход подается строка, на выход она дает символы наоборот (разворачивает строку). 
//Пример: «привет Женя» -> «янеЖ тевирп»
//Обратите внимание: метод reverse существует только у массивов.

const stringReverse = str => str.split('').reverse().join('');

