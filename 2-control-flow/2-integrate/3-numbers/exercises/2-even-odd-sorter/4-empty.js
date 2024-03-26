// #todo

'use strict';

let userNumber = NaN;

while (Number.isNaN(userNumber)) {
  const userInput = prompt('enter a number');

  if (userInput === '' || userInput === null) {
    alert('Nope no escape you have to enter something');
    continue;
  }

  userNumber = Number(userInput);

  if (Number.isNaN(userNumber)) {
    alert(`"${userInput}" is not a number`);
  }
}

if (userNumber %2 === 0) {
  alert(`"${userNumber}" is an even number`);
} else {
  alert(`"${userNumber}" is an odd number`);
}
