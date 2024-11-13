'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];


let listitem = document.getElementById('target');

for (let i = 0; i < students.length; i++) {
  let item = document.createElement('option');
  item.textContent = students[i].name;
  item.value = students[i].id;

  listitem.appendChild(item);
}
