// #todo

'use strict';
const instructions =
  'calculate the average of many numbers:\n\n' +
  '- you must input something\n' +
  '- input a number and it will be added to the sum\n' +
  '- input "done" and the program will finish (case insensitive)\n' +
  '- input anything else and it will be ignored\n\n' +
  'when you have finished inputting numbers, the average will be displayed';
alert(instructions);

let sum = 0;
let inputCount = 0;
let stillEnteringInput = true;

while (stillEnteringInput) {
  const userInput = prompt('enter a number to add');
  if (userInput === '' || userInput === null) {
    alert('nope there is no escape');
    continue;
  } else if (userInput.toLowerCase() === 'done') {
    stillEnteringInput = false;
    break;
  } else {
    const numberToAdd = Number(userInput);
    if (isNaN(numberToAdd)) {
      alert('"' + userInput + '" is not a number it will be ignored');
      continue;
    } else {
      sum = sum + numberToAdd;
      inputCount++;
    }
  }
}

const average = sum / inputCount;

const finalMessage = alert(
  'the average of your total ' + sum + ' is ' + average + ' !',
);
