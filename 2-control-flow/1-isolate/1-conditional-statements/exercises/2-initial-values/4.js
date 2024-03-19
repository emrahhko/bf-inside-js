// #todo

'use strict';

console.log('-- begin --');

// can you find at least one solution to reach each path?
//  what do all solutions to the same path have in common?
// or maybe there are unreachable paths!

const value1 = true ;
const value2 = false ;
let path = '';

if (value1 === value2) {
  path = 'if'; // this path if I value1 and value2 has the same exact number
} else if (!value1 === !value2) {
  path = 'else if 1'; // this path if value1 has -50 and value2 has 50 as a value
} else if (Number(value2) === Number(value1)) {
  path = 'else if 2'; // this path is unreachable, if condition take it first
} else if (!(value1 || value2)) {
  path = 'else if 3';
} else {
  path = 'else'; // this path if value1 has true and value2 has false
}

console.log(path);

console.log('-- end --');
