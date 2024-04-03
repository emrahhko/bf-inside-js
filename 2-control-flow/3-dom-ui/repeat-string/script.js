import { readNumber, readString, display } from '../../../lib/dom-io.js';

document.getElementById('repeat-it').addEventListener('click', () => {
  debugger;

  // read user values
  const phrase = readString('user-text');
  const numberOfTimes = readNumber ('number-of-times');

  // repeat the string
 // let repeatedString = phrase.repeat(numberOfTimes);
 let repeatedString = '';

 for (let i = 0; i < numberOfTimes; i++) {
   repeatedString = repeatedString + phrase;
 }


  // display the repeated string
  display('repeated-output', repeatedString);
});
