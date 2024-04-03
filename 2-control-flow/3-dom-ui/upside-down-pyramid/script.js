import { readString, display } from '../../../lib/dom-io.js';

document.getElementById('pyramid-it').addEventListener('click', () => {
  debugger;

  // read user text
  const userInput = readString('to-pyramid');

  // create the pyramid
  let result = '';
  let reduce = '';

  for (let i = 0; i < userInput.length; i++) {
    reduce = userInput.slice(i) + '\n';
    result = result + reduce;
  }

  // display the pyramid
  display('pyramided', result);
});
