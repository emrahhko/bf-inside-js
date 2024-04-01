// #todo

'use strict';

const instructions =
  'calculate the sum of many numbers:\n\n' +
  '- you must input something\n' +
  '- input a number and it will be added to the sum\n' +
  '- input "done" and the program will finish (case insensitive)\n' +
  '- input anything else and it will be ignored';
alert(instructions);

let sum = 0;

let userInput = '';
let isDone = false;
while (!isDone) {
  userInput = prompt('enter a number to add, or "done" to finish');

  /* -- BEGIN: handle user input - nothing, done, a number or not a number -- */
  if (userInput === '' || userInput === null) {
    alert('no escape enter something');
  } else if (userInput.toLowerCase() === 'done') {
    isDone = true;
  } else if (isNaN(userInput)) {
    alert('"' + userInput + '" is not a number, it will be ignored!')
  } else {
    const nums = Number(userInput);
    if (isNaN(nums)) {
      alert('"' + userInput + '" is not a number it will be ignored')
    } else {
        sum = sum + nums;

    }
  }


  /* -- END -- */
}

const sumMessage = 'the sum of your numbers is: ' + sum;
alert(sumMessage);
