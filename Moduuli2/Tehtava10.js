'use script';

function startVoting() {
  let candidates = [];
  const how_many = parseInt(prompt('How many candidates?'));

  for (let i = 0; i < how_many; i++) {
    const candidateName = prompt(`Give name for candidate: ${i + 1}`);
    candidates.push({name: candidateName, votes: 0});
  }

  const voterCount = parseInt(prompt('Enter the number of voters:'));

  // voting process
  for (let i = 0; i < voterCount; i++) {
    const vote = prompt(`Voter ${i +
    1}, who would you like to vote for? Enter candidate's name:`);

    // If vote is empty
    if (vote.trim() === '') {
      console.log(`Voter ${i + 1} cast a blank vote.`);
      continue;
    }

    const candidate = candidates.find(
        c => c.name.toLowerCase() === vote.toLocaleLowerCase());
    if (candidate) {
      candidate.votes++;
    } else {
      console.log(`Invalid candidate name entered. ${i + 1}`);
    }
  }

  // winner and results
  candidates.sort((a, b) => b.votes - a.votes);

  const winner = candidates[0]; // candidate with highest votes after sorting

  console.log(`The winner is ${winner.name} with ${winner.votes} votes.`);
  console.log(`Results:`);

  candidates.forEach(candidate => {
    console.log(`${candidate.name}: ${candidate.votes}`);
  });

  const outputElement = document.getElementById('output');
  outputElement.innerHTML = `<h3>The winner is ${winner.name} with ${winner.votes} votes.</h3>`;
  let resultHTML = '<h4>Results:</h4><ul>';
  candidates.forEach(candidate => {
    resultHTML += `<li>${candidate.name}: ${candidate.votes} votes</li>`;
  });
  resultHTML += '</ul>';
  outputElement.innerHTML += resultHTML;
}

// start voting program
startVoting();
