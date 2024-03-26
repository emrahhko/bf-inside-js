// #todo

'use strict';

const userResponse = prompt('enter a number: ');

const userInput = Number(userResponse);

const isANumber = !Number.isNaN(userInput);

const askAgain = `You sure you entered a Number? 
Ok => confirm
Cancel =>`

const userThink = confirm(askAgain);

if (isANumber === userThink) {
  alert('Yes correct');
} else {
  alert('Nope :( ');
}
