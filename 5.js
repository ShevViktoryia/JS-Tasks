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

//Массив содержит строки с информацией о железнодорожных станциях на севере Англии. 
//Строки представляют собой трёхбуквенный код станции, затем некоторые машиночитаемые данные, за которыми следует точка с запятой,
// а затем название станции, пригодное для чтения человеком. 
//Необходимо извлечь код станции и имя и поместить их в строку со следующей структурой:
//MAN: Manchester Piccadilly
//Вывести эти строки в консоль

let stations = [
'MAN675847583748sjt567654;Manchester Piccadilly',
'GNF576746573fhdg4737dh4;Greenfield',
'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
'SYB4f65hf75f736463;Stalybridge',
'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'
];
const getInfo = stations => {
  stations.forEach(item => {
    console.log(item.slice(0, 3) + ": " + item.slice(item.indexOf(';')+1));
  });
}
getInfo(stations);

//Напишите функцию unique(arr), которая принимает массив, а возвращает новый массив, содержащий только уникальные элементы arr.
const unique = arr => {
  let res = [];
  arr.forEach(item => {
    if(!res.includes(item)) {
      res.push(item);
    }
  });
  return res;
}