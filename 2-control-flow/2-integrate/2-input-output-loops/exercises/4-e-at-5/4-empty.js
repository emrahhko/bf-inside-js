// #todo

'use strict';
let validInput = '';
let isValid = false;

while (!isValid) {
  const userInput = prompt('enter anything with "e" or "E" as the 5th letter');

  if (userInput ==='' || userInput === null) {
    alert('this is nothing');
  } else if (userInput.length < 5) {
    alert('too short');
  } else if (userInput[4] === 'e' || userInput[4] === 'E') {
    validInput = userInput;
    isValid = true;
  } else {
    alert('input has no "e" or "E" as the 5th characters ');
  }
}

alert('done "' + validInput + '"');