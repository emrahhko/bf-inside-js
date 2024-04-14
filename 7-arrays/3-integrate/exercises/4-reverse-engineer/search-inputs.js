import {search1} from '../utils/search1.js'

const phrases = [];
while (true) {
  const userInput = prompt('enter something click cancel to finish');
  if (userInput === null) {
    break;
  } else if (userInput === '') {
    alert('nope enter something please');
    continue;
  }
  phrases.push(userInput);
}
let query = '';

while (query === null || query === '') {
  query = prompt('enter something to search');
}

const result = search1(phrases, query);
alert(` ${result} includes -> "${query}"`);
