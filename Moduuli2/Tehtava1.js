'use script'

let numbers = []

function num(times) {
            for (let i = 1; i <= times; i++) {
              numbers.push(prompt('Give a number.'))
            }
            console.log(`Numbers given in reverse order are:`);
            for (let i = 1; i <= times; i++) {
              console.log(numbers.pop())
            }
}

num(5);


