import { doubleTheChars } from './double-the-chars.js';

describe('double each character of a string', () => {
  it('doubles each character in the string', () => {
    const actual = doubleTheChars('hello');
    expect(actual).toEqual('hheelllloo');
  });
    it('return an empty string if the input is empty', () => {
    const actual = doubleTheChars('');
    expect(actual).toEqual('');
  });
      it('an Error message if the input is null', () => {
    expect (() => { doubleTheChars(null);
    }).toThrow(Error);
  });
});

