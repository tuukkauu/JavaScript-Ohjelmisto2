'use script';

const year = Number(prompt('Enter a year:'));

let IsLeapYear;

if (year % 4 === 0) {
  if (year % 100 === 0) {
    if (year % 400 === 0) {
      IsLeapYear = true;
      document.querySelector('#result').innerHTML = `The given number is a leap year.`
    } else {
      IsLeapYear = false
      document.querySelector('#result').innerHTML = `The given number is not a leap year.`
    }
  } else {
    IsLeapYear = true
    document.querySelector('#result').innerHTML = `The given number is a leap year.`
  }
} else {
  IsLeapYear = false
  document.querySelector('#result').innerHTML = `The given number is not a leap year.`
}
