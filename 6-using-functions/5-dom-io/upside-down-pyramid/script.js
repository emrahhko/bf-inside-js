import { readString, display } from '../../../lib/dom-io.js';

import { upsideDown } from './utils/upside-down.js';

document.getElementById('pyramid-it').addEventListener('click', () => {
  debugger;

  const userInput = readString('to-pyramid');

  const result = upsideDown(userInput);

  display('pyramided', result);
});
