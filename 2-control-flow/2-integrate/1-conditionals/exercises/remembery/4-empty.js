// #todo

'use strict';

const instructions = ` Welcome to Remembery,
the game of remembering.

You will be ask to enter 3 phrases
And then you will be asked to remember one of them.

If your guess is exactly the same, you win`;

alert(instructions);

let input1 = null;
let input2 = null;
let input3 = null;

while (input1 === '' || input1 === null) {
  input1 = prompt('enter your first phrase:');
}

while (input2 === '' || input2 === null) {
  input2 = prompt('enter your second phrase:');
}

while (input3 === '' || input3 === null) {
  input3 = prompt('enter your third phrase');
}

alert('all saved! get ready to remember');

const randomDecimal = Math.random();
const decimalTimes3 = randomDecimal * 3;
const randomFrom1To3 = Math.ceil(decimalTimes3);

const attempt = prompt('enter phrase number ' + randomFrom1To3);

let correctAnswer = '';
if (randomFrom1To3 === 1) {
  correctAnswer = input1;
} else if (randomFrom1To3 === 2) {
  correctAnswer = input2;
} else if (randomFrom1To3 === 3) {
  correctAnswer = input3;
}

const correct = correctAnswer === attempt;
const result = correct
  ? 'correct! phrase ' + randomFrom1To3 + ' was " ' + correctAnswer + ' "'
  : 'nope :( try agin';

alert(result);
