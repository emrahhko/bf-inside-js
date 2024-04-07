import { readNumber, readString, display } from '../../../lib/dom-io.js';

import { skip } from './utils/skip.js';

document.getElementById('skip-them').addEventListener('click', () => {
  debugger;

  const userInput = readString('user-text');
  const toSkip = readNumber('skip-size');

  const result = skip(userInput, toSkip);

  display('skipped-output', result);
});
