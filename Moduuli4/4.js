'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');

  form.addEventListener('submit', async (event) => {
    event.preventDefault(); // Estetään lomakkeen oletuskäyttö

    const url = 'https://api.tvmaze.com/search/shows'; // API osoite
    const request = form.querySelector('input#query').value; // Haku

    const response = await fetch(`${url}?q=${request}`); // Lähetetään API pyyntö
    const result = await response.json(); // vastaus json muotoon

    const resultsDiv = document.getElementById('results'); // Tulosdiv
    resultsDiv.innerHTML = ''; // Tyhjennetään vanhat tulokset

    result.forEach(tvShow => {
      // uuden artikkelin luonti
      const article = document.createElement('article');

      // Ohjelman tai sarjan nimi <h2>
      const h2 = document.createElement('h2');
      h2.textContent = tvShow.show.name;

      // Linkki <a>

      const link = document.createElement('a');
      link.href = tvShow.show.url;
      link.target = '_blank'; // uusi välilehti
      link.textContent = 'Details';

      const img = document.createElement('img');
      img.src = tvShow.show.image?.medium || '';
      img.alt = tvShow.show.name;

      // Yhteenveto div
      const summary = document.createElement('div');
      summary.innerHTML = tvShow.show.summary || 'No summary available.';

      article.appendChild(h2);
      article.appendChild(link);
      if (tvShow.show.image && tvShow.show.image.medium) {
        img.src = tvShow.show.image.medium; // käytetään olemassa olevaa kuvaa
      } else {
        img.src = 'https://via.placeholder.com/210x295?text=Not%20Found'; // Käytetään oletuskuvaa
      }

      // Asetetaan kuvaelementin alt attribuutti
      img.alt = tvShow.show.name;

      article.appendChild(img); // Lisätään kuva artikkeliin

      article.appendChild(summary);

      resultsDiv.appendChild(article);

    });
  });
});