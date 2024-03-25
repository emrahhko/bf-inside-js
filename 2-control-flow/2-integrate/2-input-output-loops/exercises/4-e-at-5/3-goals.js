// #todo

'use strict';

let validInput = '';
let isNotValid = true;
while (isNotValid) {
  const userInput = prompt('enter anything with "e" or "E" as the 5th letter');

  if (userInput === '' || userInput === null) {
    alert('that is nothing');
  } else if (userInput.length < 5) {
    alert('too short')
  } else if (userInput[4] === 'E' || userInput[4] === 'e') {
    validInput = userInput;
    isNotValid = false;
  }

  /* -- BEGIN: validate input -- */
  /* -- END: validate input -- */
}

alert('done: "' + validInput + '"');
