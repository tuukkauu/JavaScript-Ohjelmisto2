'use strict';
const names = ['John', 'Paul', 'Jones'];

let listitem = document.getElementById('target');

for (let i = 0; i < names.length; i++) {
  let item = document.createElement('li');
  item.textContent = names[i];

  listitem.appendChild(item);
}
