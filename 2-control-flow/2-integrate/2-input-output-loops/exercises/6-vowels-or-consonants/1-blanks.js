// #todo

'use strict';

/* for character of String

  iterating through each character in a string is so common
  that there's special syntax to make it easier

*/

let userInput = '';
let userConfirmed = false;
while (!userConfirmed) {
  userInput = prompt('enter a word to filter:');

  if (userInput === '' || userInput === null) {
    alert('nope, enter something');
    continue;
  }

  const whiteSpaceRegex = /\s/g;
  if (whiteSpaceRegex.test(userInput)) {
    alert("words can't have white space");
    continue;
  }

  const confirmMessage =
    'do you want to filter this word?\n\n' + '- "' + userInput + '"';
  const confirmed = confirm(confirmMessage);
  if (confirmed) {
    break;
  } else {
    continue;
  }
}

const removeVowels = confirm(`what would you like to remove from "${userInput}"?
- ok: vowels
- cancel: consonants
`);

const toRemove = removeVowels ? 'vowels': 'consonants';

let filteredInput = '';
for (const character of userInput) {
  const lowerCaseCharacter = character.toLowerCase();
  if (toRemove === 'vowels') {
    filteredInput = filteredInput + lowerCaseCharacter.replace(/[aeiou]/g,'');
  } else {
    filteredInput = filteredInput + lowerCaseCharacter.replace(/[bcdfghjklmnpqrstvwxyz]/g, '');
  }
}

const finalMessage = `"${userInput}" -> "${filteredInput}"`;
alert(finalMessage);




