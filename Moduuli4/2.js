'use strict';

      document.addEventListener("DOMContentLoaded", () => {
        const form = document.querySelector('form');

          form.addEventListener("submit", async (event) => {
            event.preventDefault(); // Lomakkeen oletuskäytöksen estäminen

            const url = 'https://api.tvmaze.com/search/shows'; // API osoite
            const hakusana = form.querySelector('input#query').value;  // haku

              const response = await fetch(`${url}?q=${hakusana}`); // Lähetetään API pyyntö
              const result = await response.json(); // vastaus json mutoon
              console.log("result", result);
          });
      });