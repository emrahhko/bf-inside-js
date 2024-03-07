// #todo

debugger;

'use strict';

console.log('-- begin --');

let fruit = 'banana';
let desert = 'cake';
let topping = 'frosting';

desert = 'chocolate ' + desert;
console.assert(desert === 'chocolate cake', 'Test 1');

desert = desert + ' with ' + topping;
console.assert(desert === 'chocolate cake with frosting', 'Test 2');

desert = 'banana ' + desert;
console.assert(desert === 'banana chocolate cake with frosting','Test 3');

console.log('-- end --');
