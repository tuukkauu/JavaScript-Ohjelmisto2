'use strict'

const num = []


function making_list () {
  while (true) {
    const given_num = Number(prompt("Give a number, if you want to stop, give a number zero."));

    if (given_num === 0) {
      break;
    }

    num.push(given_num);
  }

  num.sort((a, b) => b - a);

  console.log("Given numbers from largest to smallest:")
  for (let i = 0; i < num.length; i++) {
    console.log(num[i]);
  }
}

making_list()