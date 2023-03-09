//Создать конструктор, который возвращает любой объект из жизни с одним свойством и одним методом.

function Customers(name) {
  this.name = name;
  this.printName = function() {
     return ("Hello " + this.name);
  };
  return (name + this.printName);
}

let Customer = new Customers('Jack');
console.log(Customer);