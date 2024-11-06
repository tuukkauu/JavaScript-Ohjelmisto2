'use script'

const question = Number(prompt('How many times you want to roll the dice?'))

let sum = 0;

for (let i = 0; i < question; i++) {
  const roll = Math.floor(Math.random() * 6) + 1;
  sum += roll
}

document.querySelector('#result').innerHTML = `The sum of the eye numbers is: ${sum}`