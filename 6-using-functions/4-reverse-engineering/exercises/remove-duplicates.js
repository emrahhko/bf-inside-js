import { filteredPhrase } from './utils/filtered-phrase.js';
import {userInfo} from './utils/user-info.js';

let userPhrase = '';

userPhrase = userInfo('enter something the repeated letters will be eliminate');


let removedString = filteredPhrase(userPhrase);

alert('"' + userPhrase + '"  -> "' + removedString + '" ');

