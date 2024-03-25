// #todo

'use strict';

let validInput = '';

let index = 0;

while (true) {
  index = index + 1;

  const userInput = prompt(
    'enter anything with "e" or "E" as the' + index + 'th letter`',
  );

  if (userInput === '' || userInput === null) {
    alert('this is nothing');
    continue;
  } else if (userInput.length < index) {
    alert('nope too short');
    continue;
  } else if (userInput[index - 1] === 'e' || userInput[index - 1] === 'E') {
    validInput = userInput;
    break;
  } else {
    alert('input has no "e" or "E" as the' + index + 'th character');
    continue;
  }
}

alert('Done "' + validInput + '"');