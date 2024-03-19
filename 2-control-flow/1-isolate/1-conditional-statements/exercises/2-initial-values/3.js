// #todo

'use strict';

console.log('-- begin --');

// can you find at least one solution to reach each path?
//  what do all solutions to the same path have in common?
// or maybe there are unreachable paths!

const value1 = false;
const value2 = false;
let path = '';

if (value1 && !value2) {
  path = 'if'; // this path value1 = true value2 = false
} else if (!value1 || !value2) {
  path = 'else if 1'; // this path value1 = false value2 = true
} else if (value2 && !value1) {
  path = 'else if 2'; // this path is unreachable.
} else {
  path = 'else'; // this path value1 = true value2 = true
}

console.log(path);

console.log('-- end --');
