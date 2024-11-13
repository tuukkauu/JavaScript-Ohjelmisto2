'use script'

let list1 = document.createElement('li');
list1.textContent = "First item";

let list2 = document.createElement('li');
list2.className = 'my-item'
list2.textContent = "Second item";

let list3 = document.createElement('li');
list3.textContent = "Third item";

let targetElement = document.getElementById('target');

targetElement.appendChild(list1)
targetElement.appendChild(list2)
targetElement.appendChild(list3)