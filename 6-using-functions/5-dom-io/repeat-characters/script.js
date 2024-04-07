import { readNumber, readString, display } from '../../../lib/dom-io.js';

import { repeatCharacters } from './utils/repeat-characters.js';

document.getElementById('repeat-them').addEventListener('click', () => {
  debugger;

  const text = readString('user-text');
  const rep = readNumber('number-of-times');

  const repeatedChars = repeatCharacters(text, rep);

  display('repeated-output', repeatedChars)
});
