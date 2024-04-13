import {keepOrNot} from '../utils/keepOrNot.js';

alert(
  `enter as many texts as you want

`,
);

// -- gather strings --
const strings = [];
while (true) {
  const input = prompt('enter the next phrase or press "cancel"');

  if (input === null) {
    break;
  } else if (input === '') {
    alert('nothing is not allowed');
    continue;
  }

  strings.push(input);
}
console.log(strings);

// const newARR = [];

// for (let i = 0; i < strings.length; i++) {
//   let userConfirm = confirm(`you want to keep "${strings[i]}"`);
//   if (userConfirm) {
//     newARR.push(strings[i]);
//   }
// }
// alert(newARR);

const result = keepOrNot(strings);

alert(result);


