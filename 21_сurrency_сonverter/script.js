const input_1 = document.querySelector('#input_1');
const input_2 = document.querySelector('#input_2');
const select1 = document.querySelector('#select1');
const select2 = document.querySelector('#select2');

let first_currency = select1.options[select1.selectedIndex].text;
let second_currency = select2.options[select2.selectedIndex].text;

function convert(value, input) {
  if(first_currency === 'BYN') {
    if(second_currency === 'USD') {
      return input === 1 ? (value * 0.3404).toFixed(4) : (value * 2.9377).toFixed(4);
    }
    else if(second_currency === 'EUR') {
      return input === 1 ? (value * 0.3107).toFixed(4) : (value * 3.2181).toFixed(4);
    }
    else {
      return value;
    }
  }
  else if(first_currency === 'USD') {
    if(second_currency === 'BYN') {
      return input === 1 ? (value * 2.9377).toFixed(4) : (value * 0.3404).toFixed(4);
    }
    else if(second_currency === 'EUR') {
      return input === 1 ? (value * 0.9129).toFixed(4) : (value * 1.0954).toFixed(4);
    }
    else {
      return value;
    }
  }
  else {
    if(second_currency === 'BYN') {
      return input === 1 ? (value * 3.2181).toFixed(4) : (value * 0.3107).toFixed(4);
    }
    else if(second_currency === 'USD') {
      return input === 1 ? (value * 1.0954).toFixed(4) : (value * 0.9129).toFixed(4);
    }
    else {
      return value;
    }
  }
}

input_1.oninput = (e) => {
  input_2.value = e.target.value ? convert(e.target.value, 1) : '';
}

input_2.oninput = (e) => {
  input_1.value = e.target.value ? convert(e.target.value, 2) : '';
}

select1.onchange = (e) => {
  first_currency = e.target.options[e.target.selectedIndex].text;
  input_2.value = input_1.value ? convert(input_1.value, 1) : '';
}

select2.onchange = (e) => {
  second_currency = e.target.options[e.target.selectedIndex].text;
  input_2.value = input_1.value ? convert(input_1.value, 1) : '';
}