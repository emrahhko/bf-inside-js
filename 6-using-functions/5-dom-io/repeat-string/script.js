import { readNumber, readString, display } from '../../../lib/dom-io.js';

import { repeatString } from './utils/repeat-string.js';

document.getElementById('repeat-it').addEventListener('click', () => {
  debugger;

  const userInput = readString('user-text');
  const rep = readNumber('number-of-times');

  const result = repeatString(userInput, rep);

  display('repeated-output', result);
});
