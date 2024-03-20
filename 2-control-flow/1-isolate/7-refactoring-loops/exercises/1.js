// #todo

'use strict';

console.log('-- begin 1 --');

const school = 'HackYourFuture';

for (const letter of school) {
  console.log(letter);
}

console.log('-- end 1 --');

// write this for...of loop as a for loop:

console.log('-- begin 2 --');

for (let i = 0; i < school.length; i++) {
  console.log(school[i]);
}

console.log('-- end 2 --');

// write this for loop as a while loop:

console.log('-- begin 3 --');
let count = 0;

while (count < school.length) {
  console.log(school[count]);
  count = count +1
}

console.log('-- end 3 --');
