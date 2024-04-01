// #todo

'use strict';

let userInput = '';
let repetitions = NaN;
while (true) {
  /* -- BEGIN: gather input and cast it to a number -- */
  userInput = prompt('enter something');
  if (userInput ==='' || userInput === null) {
    alert('nope enter something');
    continue;
  }  

  const repetitionsInput = prompt('how many time do you want to repeat it?')
  repetitions = Number(repetitionsInput);
  /* -- END -- */

  if (Number.isNaN(repetitions)) {
    alert('"' + repetitionsInput + '" is not a number');
    continue;
  }

  /* -- BEGIN: ask the user to confirm their input -- */
  const confirmMessage = `is this correct ?
  "${userInput}"
     ${repetitions} times`;
  const confirmation = confirm(confirmMessage);
  if (confirmation) {
    break;
  }
  /* -- END -- */
}

/* -- BEGIN: repeat the input -- */

let repeatedInput = '';

for (let i = 0; i < repetitions; i++) {
  repeatedInput += userInput;
}
/* -- END -- */

const finalMessage = `"${userInput}" -> "${repeatedInput}"`;
alert(finalMessage);
