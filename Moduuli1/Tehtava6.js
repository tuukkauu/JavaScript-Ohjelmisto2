'use script';

const question = confirm(
    'Should I calculate the square root? \'OK\' or \'Cancel\':');

if (question) {
  const num = Number(prompt('Give me a number for the calculation, please.'));
  if (num >= 0) {
    document.querySelector(
        '#result').innerHTML = `The square root for number ${num} is ${Math.sqrt(
        num).toFixed(2)}`;
  } else {
    document.querySelector(
        '#result').innerHTML = `The square root of a negative number is not defined.`;
  }

} else {
  document.querySelector(
      '#result').innerHTML = `The square root is not calculated.`;
}
