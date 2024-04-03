import { readNumber, readString, display } from '../../../lib/dom-io.js';

document.getElementById('skip-them').addEventListener('click', () => {
  debugger;

  // read user values
  const userInput = readString('user-text');
  const toSkip = readNumber('skip-size');

  // create a new string with skipped characters
  let skipped = '';
  for (let i = 0; i < userInput.length; i++) {
    if (i % toSkip !== 0) {
      continue;
    }
    skipped = skipped + userInput[i];
  }

  // display the skipped string
  display('skipped-output', skipped);
});
