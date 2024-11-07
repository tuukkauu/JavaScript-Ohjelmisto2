'use script'

const name = []


function num (times) {
  for (let i = 1; i <= times; i++) {
    name.push(prompt('Give the dog\'s name:'));
  }

  let list = '<ul>';
  name.sort();

  for (let i = 0; i < name.length; i++) {
    list += `<li>${name[i]}</li>`;
  }

  list += '</ul>';

document.getElementById(`result`).innerHTML = list
}

num(6)