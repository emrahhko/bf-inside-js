// #todo

'use strict';

let userInput = '';
let isValidName = false;
while (!isValidName) {
  userInput = prompt('enter your name:');
  /* -- BEGIN: validate input -- */
  /* -- END: validate input -- */

  if (userInput === '' || userInput === null) {
    alert('nothing is not a name');
    continue;
  }

  const confirmInput = 'is ' + userInput + ' your name?';
  isValidName = confirm(confirmInput);

  if (isValidName) {
    isValidName = true;
  }
}
const finalMessage = `your name is: "${userInput}"`;
alert(finalMessage);
