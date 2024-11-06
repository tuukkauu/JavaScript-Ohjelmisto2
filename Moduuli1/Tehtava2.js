'use strict';

const answer = prompt('Your name:');

//console.log("Hello, " + answer, "!")
//console.log(`Hello, ${answer}!`)

document.querySelector('#answer').innerHTML = `Hello, ${answer}!`;

