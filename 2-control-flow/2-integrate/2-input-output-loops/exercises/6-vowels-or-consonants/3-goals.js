// #todo

'use strict';

/* for character of String

  iterating through each character in a string is so common
  that there's special syntax to make it easier

*/

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
