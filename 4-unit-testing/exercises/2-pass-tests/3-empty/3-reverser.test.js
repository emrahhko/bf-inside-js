// #todo

'use strict';

/**
 * reverse a given string
 * 
 * @param {string} [text] - the string to reverse
 * 
 * @return {string} reversed string
 */
const reverser = (text = '') => {
  let result = '';
  for (let i = 0; i < text.length; i++) {
    result = text[i] + result;
  }
  return result;
};

describe('reverser: reverses a string', () => {
  it('reverses one letter', () => {
    const returned = reverser('a');
    expect(returned).toEqual('a');
  });
  it('reverses the empty string', () => {
    const returned = reverser('');
    expect(returned).toEqual('');
  });
  it('reverses words with punctuation', () => {
    const returned = reverser('hoy!');
    expect(returned).toEqual('!yoh');
  });
  it('reverses long strings', () => {
    const returned = reverser('!! How is LOUD ??');
    expect(returned).toEqual('?? DUOL si woH !!');
  });
  it('reverses one letter', () => {
    const returned = reverser('a');
    expect(returned).toEqual('a');
  });
  it('has a default parameter', () => {
    const returned = reverser();
    expect(returned).toEqual('');
  });
});
