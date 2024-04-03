import { readString, display } from '../../../lib/dom-io.js';

document.getElementById('reverse-it').addEventListener('click', () => {
  debugger;

  // read user text
  const toReverse = readString('user-text');

  // use a for loop that counts down (i--) to reverse the input
  let reversed = '';
  for (let i = toReverse.length - 1; i >= 0; i--) {
    reversed = reversed +  toReverse[i];
  }

  // display the reversed string
  display('reversed-output', reversed);
});
