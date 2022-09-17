// https://www.omnicalculator.com/conversion/kelvin-to-fahrenheit

const v =  document.getElementById('v');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const fahrenheitRadio = document.getElementById('fahrenheitRadio');
const kelvinRadio = document.getElementById('kelvinRadio');

let fahrenheit;
let kelvin = v; 

// labels of the inpust
const variable = document.getElementById('variable');

fahrenheitRadio.addEventListener('click', function() {
  variable.textContent = 'Kelvin';
  kelvin = v;
  result.textContent = '';
});

kelvinRadio.addEventListener('click', function() {
  variable.textContent = 'Fahrenheit';
  fahrenheit = v;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(fahrenheitRadio.checked)
    result.textContent = `Fahrenheit = ${computefahrenheit().toFixed(5)}`;

  else if(kelvinRadio.checked)
    result.textContent = `Kelvin = ${computekelvin().toFixed(5)}`;
})

// calculation

function computefahrenheit() {
  return (Number(kelvin.value) - 273.15) * 9/5 + 32 ;
}

function computekelvin() {
  return (Number(fahrenheit.value) - 32) * 5/9 + 273.15;
}