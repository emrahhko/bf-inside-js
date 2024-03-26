// #todo

'use strict';

const userString = prompt('enter a number:');

/* -- BEGIN: check if input is a number -- */

const userInput = Number(userString);

const inputIsANumber = !Number.isNaN(userInput);

/* -- END -- */

/* -- BEGIN: ask the user if they think their input is a number -- */

const confirmMessage = (`You sure you entered a number?
OK => confirm
Cancel => cancel`);

const userThinksItsANumber = confirm(confirmMessage);

/* -- END -- */

const userIsCorrect = userThinksItsANumber === inputIsANumber;

if (userIsCorrect) {
  alert('correct!');
} else {
  alert('nope :(');
}
