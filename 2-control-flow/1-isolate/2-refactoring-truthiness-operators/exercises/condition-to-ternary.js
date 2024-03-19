// #todo

'use strict';

console.log('-- begin --');

// refactor this code to use a _?_:_ instead of a conditional

// try different values and different types
const isLoggedIn = false;
const secretInformation = 'you a b**ch';
const warningMessage = 'you still a b**ch';
console.log(isLoggedIn, secretInformation, warningMessage);


// if (isLoggedIn) {
//   toDisplay = secretInformation;
// } else {
//   toDisplay = warningMessage;
// }

let toDisplay = isLoggedIn ? secretInformation : warningMessage;

console.log(toDisplay);

console.log('-- end --');

