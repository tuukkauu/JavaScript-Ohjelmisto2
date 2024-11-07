'use script'

const name = [];

const how_many = Number(prompt('How many participants?'))


for (let i = 1; i <= how_many; i++) {
  const participantName = prompt('Give a name of the participant:');
  name.push(participantName)
}

let ordered_list = '<ol>';
name.sort();
for (let i = 0; i < name.length; i++) {
    ordered_list += `<li>${name[i]}</li>`;
}

ordered_list += '</ol>'

document.getElementById('result').innerHTML = ordered_list;
