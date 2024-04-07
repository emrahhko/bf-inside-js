
import {doubleTheChars} from './utils/double-the-chars.js';
import {elimineSpace} from './utils/elimine-space.js';
import {userInfo} from './utils/user-info.js';

let userInput = '';

userInput = userInfo('enter something here')

let doubleOrDelete = `"ok" to keep only the letters
"cancel" to double each characters 
`;
let userConfirmation = confirm(doubleOrDelete);


let finalMessage = userConfirmation
  ? elimineSpace(userInput)
  : doubleTheChars(userInput);

alert(finalMessage);
