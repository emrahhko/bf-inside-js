import { readNumber, display } from '../../../lib/dom-io.js';

import { multiplication } from './utils/multiplication.js';

document.getElementById('do-math').addEventListener('click', () => {
  debugger;

  const left = readNumber('left');
  const right = readNumber('right');

  const result = multiplication(left, right);

  display('product', result);
});
