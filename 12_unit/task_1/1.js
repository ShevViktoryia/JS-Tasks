/*1) Описать функцию-конструктор Shop, которая создает объект магазина. 
У магазина есть два свойства -  название и адрес.
С помощью этого конструктора создать два объекта - например, для магазинов Green и ProStore (можно любые).
Добавить эти объекты в массив shops.
В итоге должен получиться массив объектов типа:
[{title: 'Green', address:  'ул. Петра Мстиславца 11, Минск'},
{title: 'ProStore', address:  'пр-т Дзержинского, 126, Минск'}]
2) С помощью метода map получить массив, в котором будут содержаться только адреса магазинов. То есть:
['ул. Петра Мстиславца 11, Минск', 'пр-т Дзержинского, 126, Минск'] */

function Shop(title, address) {
  this.title = title;
  this.address = address;
}
let shops = [];
let Green = new Shop('Green', 'ул. Петра Мстиславца 11, Минск');
let ProStore = new Shop('ProStore', 'пр-т Дзержинского, 126, Минск');
shops.push(JSON.parse(JSON.stringify(Green)), JSON.parse(JSON.stringify(ProStore)));
console.log(shops);
console.log(shops.map(item => item.address));