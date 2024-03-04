import { readNumber, display } from '../../../../lib/dom-io.js';

document.getElementById('do-math').addEventListener('click', () => {
  debugger;

  // read user values
  let firstNum = readNumber('left');
  console.log(firstNum);
  let secondNum = readNumber('right');
  console.log(secondNum);
  let result = 0;

  // use a for loop to multiply the two numbers
result = firstNum * secondNum;
  // display the product
  display('product', +result);
});
