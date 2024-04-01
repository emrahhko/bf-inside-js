// #todo

'use strict';

let userInput = '';
let repetitions = NaN;

while (true) {
  userInput = prompt('enter something?');
  if (userInput === '' || userInput === null) {
    alert('nope no escape enter something');
    continue;
  }
  const numberOfRep = prompt('how many time do you want to repeat it?');
  repetitions = Number(numberOfRep);

  if (isNaN(repetitions)) {
    alert('this is not a number');
    continue;
  }

  const confirmationMessage = `is this correct?
  "${userInput}" times ${repetitions}?!`;

  const confirmation = confirm(confirmationMessage);
  if (confirmation) {
    break;
  }
}

let repeatedInput = '';

for (let i = 0; i < repetitions; i++) {
  repeatedInput += userInput;
}

const finalMessage = `${userInput} -> ${repeatedInput}`;

alert(finalMessage);
