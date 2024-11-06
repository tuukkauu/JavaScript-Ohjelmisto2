'use script';

const ans1 = Number(prompt('Give first integer:'));
const ans2 = Number(prompt('Give second integer:'));
const ans3 = Number(prompt('Give third integer:'));

console.log(ans1, ans2, ans3);

document.querySelector('#ans').innerHTML = `The sum is: ${ans1 + ans2 + ans3}`;
document.querySelector('#ans2').innerHTML = `The product is: ${ans1 * ans2 *
ans3}`;
document.querySelector('#ans3').innerHTML = `The average is: ${(ans1 * ans2 *
    ans3) / 3}`;
