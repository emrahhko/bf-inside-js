// #todo

'use strict';

console.log('-- begin 1 --');

const minutesLeft = 9;

for (let i = minutesLeft; i > 0; i--) {
  const message = `${i} minutes left`;
  console.log(message);
}

console.log('-- end 1 --');
// refactor this for loop to a while loop

console.log('-- begin 1 --');

let count = minutesLeft;

while (count !== 0) {
  console.log(count + ' minutes left' );
  count --;
}

console.log('-- end 2 --');
