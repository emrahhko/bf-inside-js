// #todo

'use strict';

let userInput = '';
while (true) {
  userInput = prompt('enter anything longer than 5 characters');
  if (userInput ==='' || userInput === null) {
    alert('this is nothing');
    continue;
  }

  if (userInput.length <= 5) {
    alert('too short');
    continue;
  }

  if (userInput.length <= 6) {
    break;
  }

  /* -- BEGIN: validate input -- */
  /* -- END: validate input -- */
}

const finalMessage =
  '"' + userInput + '" is ' + userInput.length + ' characters long';
alert(finalMessage);