// #todo

'use strict';

let validInput = '';

let index = 0;
let isValid = false;
while (!isValid) {
  index = index + 1;

  const userInput = prompt(
    `enter anything with "e" or "E" as the ${index}th letter`,
  );

  if (userInput ==='' || userInput === null) {
    alert('this is nothing');
    continue;
  } else if (userInput.length < index) {
    alert('too short');
    continue;    
  } else if (userInput[index -1] === 'e' || userInput[index -1] === 'E') {
    validInput = userInput;
    isValid = true;
  } else {
    alert('input has no "e" or "E" as the ' + index + ' character')
  }

  /* -- BEGIN: validate input -- */
  /* -- END: validate input -- */
}

alert('done: "' + validInput + '"');
