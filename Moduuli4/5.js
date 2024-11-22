'use strict'

async function fetchJoke() {

  // Lähetetään pyyntö API:lle
  const response = await fetch('https://api.chucknorris.io/jokes/random');

  // Muunnetaan vastaus json muotoon
  const data = await response.json();

  // vitsin tulostus konsoliin
  console.log(data.value);

}

fetchJoke();
