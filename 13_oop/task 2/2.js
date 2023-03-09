/*
Создайте класс Calculator, который создаёт объекты с конструктором, 
который запрашивает два значения при помощи prompt и сохраняет
их значение в свойствах объекта, и двумя методами:

sum() возвращает сумму введённых свойств.
mul() возвращает произведение введённых свойств */

class Calculator {
  constructor() {
    this.first = prompt("Number: ", '');
    this.second = prompt("Numer: ", '');
  }
 sum() {
  if(Number(this.first) && Number(this.second)) {
    return Number(this.first) + Number(this.second);
  }
  return "Error";
 }
 mul() {
  if(Number(this.first) && Number(this.second)) {
    return this.first * this.second;
  }
  return "Error";
 }
}

let Calc = new Calculator();
console.log(Calc);
console.log(Calc.sum());
console.log(Calc.mul());