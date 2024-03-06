'use strict';

console.log('-- begin --');

/**
 * Calculates the number of times a given character appears in a text string and returns that count, and it's case sensitive.
 * The function first check if the given character is a single character, if it's not, it return -1 and it's stop.
 * 
 * @param {string} text - The text in which the given character will be counted.
 * @param {string} toCount - The given character that will be counted in the text.
 * 
 * If toCount is a single character, the function initializes a variable count to 0,
 * to count the number of times the character appear on the text.
 * 
 * @return {number} The final count of the times the given character appear on the text.
 */
const countCharacter = (text, toCount) => {
  if (toCount.length !== 1) {
    return -1;
  }

  let count = 0;
  for (const character of text) {
    if (character === toCount) {
      count = count + 1;
    }
  }
  return count;
};

const _1_expect = 1;
const _1_actual = countCharacter('aA', 'a');
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = 0;
const _2_actual = countCharacter('Banana', 'A');
console.assert(_2_actual === _2_expect, 'Test 2');

const _3_expect = 3;
const _3_actual = countCharacter('BANANA', 'A');
console.assert(_3_actual === _3_expect, 'Test 3');

const _4_expect = -1;
const _4_actual = countCharacter('apple', 'ap');
console.assert(_4_actual === _4_expect, 'Test 4');

console.log('-- end --');
