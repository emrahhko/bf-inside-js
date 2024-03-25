// #todo

'use strict';

let userInput = '';
while (true) {
  userInput = prompt('tell me something about frogs');

  if (userInput === '' || userInput === null) {
    alert('that is not something');
    continue;
  }

  if (!userInput.toLowerCase().includes('frog')) {
    alert('nope, not about frogs.  try again.')
  } else {
    break;
  }

  /* -- BEGIN: validate input -- */


  /* -- END: validate input -- */
}

const finalMessage =
  'i just learned something cool about frogs!\n\n- "' + userInput + '"';
alert(finalMessage);