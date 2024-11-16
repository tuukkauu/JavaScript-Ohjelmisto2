'use strict';

const num1input = document.querySelector('#num1');
const num2input = document.querySelector('#num2');
const operation = document.querySelector('#operation');
const calcButton = document.querySelector('#start');
const resultElement = document.querySelector('#result');

calcButton.addEventListener('click', function() {
  const num1 = Number(num1input.value);
  const num2 = Number(num2input.value);
  const selectedOperation = operation.value;
  let result;

  if (selectedOperation === 'add') {
  result = num1 + num2;
} else if (selectedOperation === 'sub') {
    result = num1 - num2;
  } else if (selectedOperation === 'multi') {
    result = num1 * num2;
  } else if (selectedOperation === 'div') {
    if (num2 === 0) {
    result = 'Number cannot be 0.'
    } else {
      result = num1 / num2;
    }
  }

  resultElement.textContent = `Result: ${result}`;
  });




