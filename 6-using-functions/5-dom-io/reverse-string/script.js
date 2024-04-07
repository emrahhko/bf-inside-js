import { readString, display } from '../../../lib/dom-io.js';

import { reverseString } from './utils/reverse-string.js';

document.getElementById('reverse-it').addEventListener('click', () => {
  debugger;

  const userInput = readString('user-text')

  const result = reverseString(userInput)

  display('reversed-output', result);
});
