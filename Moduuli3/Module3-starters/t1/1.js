'use script'

let unordlist = '<ul>';

  unordlist += '<li>First item</li>';
  unordlist += '<li>Second item</li>';
  unordlist += '<li>Third item</li>';

unordlist += '</ul>';

document.getElementById('target').innerHTML = unordlist;
