'use script';

const startYear = Number(prompt('Enter the start year:'));
const endYear = Number(prompt('Enter the end year:'));

// Define the function that checks for leap years
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

let leapYearList = '<ul>';

for (let year = startYear; year <= endYear; year++) {
    if (isLeapYear(year)) {    // Correctly passing 'year' to 'isLeapYear'
        leapYearList += `<li>${year}</li>`;
    }
}

leapYearList += '</ul>';

document.getElementById('result').innerHTML = leapYearList;
