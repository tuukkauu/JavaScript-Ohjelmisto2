'use script';

const studentName = prompt('Tell me your name, please:');
const randomNumber = Math.floor(Math.random() * 4) + 1;

let house;

switch (randomNumber) {
  case 1:
    house = 'Gryffindor';
    break;

  case 2:
    house = 'Slytherin';
    break;

  case 3:
    house = 'Hufflepuff';
    break;

  case 4:
    house = 'Ravenclaw';
    break;

}

document.querySelector(
    '#result').innerHTML = `${studentName}, you are ${house}.`;
