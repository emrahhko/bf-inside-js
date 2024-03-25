// #todo

'use strict';

let userInput = '';
let isYourNAme = false;

while (!isYourNAme) {
  userInput = prompt('enter your name:')

  if (userInput === '' || userInput === null) {
  alert ('nothing is not a name')
  continue;
  }

  const confirmedName = 'is this your name ' + userInput + ' ?';
  isYourNAme = confirm(confirmedName);

  if (isYourNAme) {
    isYourNAme = true;
  }
}

const finaleMessage = 'your name is: "' + userInput + '"';

alert(finaleMessage);