// #todo

'use strict';

console.log('-- begin --');

// refactor this code to use a condition instead of ||

// try different values and different types
const firstName = 'Amelie';
const lastName = 'Mauresmo';
console.log(firstName, lastName);

let hasAnAName = '';

if (firstName[0] === 'A') {
  hasAnAName = true;

} else if (lastName[0] === 'A') {
  hasAnAName = true;

} else {
  hasAnAName = false;
}
 console.log(hasAnAName);
console.log('-- end --');
