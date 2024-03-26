// #todo

'use strict';

let userInput = '';
while (true) {
  userInput = prompt('Enter a word to filter:');
  if (userInput === '' || userInput === null) {
    alert('Please enter something.');
    continue;
  } else {
    break;
  }
}

const removeVowels = confirm(`What would you like to remove from "${userInput}"?
- OK: vowels
- Cancel: consonants
`);

userInput = userInput.toLowerCase();

let toRemove = '';
if (removeVowels) {
  toRemove = /[aeiou]/g;
} else {
  toRemove = /[bcdfghjklmnpqrstvwxyz]/g;
}

let filteredInput = userInput.replace(toRemove, '');

const finalMessage = `"${userInput}" -> "${filteredInput}"`;
alert(finalMessage);
