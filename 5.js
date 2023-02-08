//Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.
//Вам понадобятся методы строк.

const ucFirst = str => str.charAt(0).toUpperCase() + str.slice(1);