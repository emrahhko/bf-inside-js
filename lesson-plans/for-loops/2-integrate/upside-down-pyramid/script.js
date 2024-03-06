import { readString, display } from '../../../../lib/dom-io.js';

document.getElementById('pyramid-it').addEventListener('click', () => {
  debugger;

  // read user text
  let userInput = readString('to-pyramid');
  let result = '';
  let extract = '';

  // create the pyramid
  for (let i = 0; i < userInput.length; i++) {
    extract = userInput.slice(i) + '\n';
    result = result + extract;
  }
  console.log(result);
  // display the pyramid
  display('pyramided', result);
});
