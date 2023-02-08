//Напишите функцию, которая принимает три числовых аргумента: number, min, max.
//Функция проверяет, находится ли число number в диапазоне чисел от min до max.
//1 вариант решения: с помощью логического И в условии.
//*2 вариант решения: с помощью логического ИЛИ в условии.

const checkRange = (number, min ,max) => (number >= min && number <= max);
const checkRange2 = (number, min ,max) => !(number < min || number > max);