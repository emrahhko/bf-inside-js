// #todo

'use strict';

/**
 * Adds two numbers together.
 *
 * @param {number} [x=0] - The left left.
 * @param {number} [y=0] - The right number.
 * @returns {number} The sum of x and y.
 */
const addTwo = (x = 0, y = 0) => {
  return x + y;
};

describe('no parameter return 0', () => {
  describe('no parameter return 0', () => {
    it('no parameter return 0', () => {
      const expected = 0;
      const actual = addTwo();
      expect(actual).toEqual(expected);
    });

    it('only one parameter return the given parameter', () => {
      const expected = 7;
      const actual = addTwo(7);
      expect(actual).toEqual(expected);
    });

    it('add two number', () => {
      const expected = 61;
      const actual = addTwo(31, 30);
      expect(actual).toEqual(expected);
    });
  });
  describe('add two negatif numbers', () => {
    it('add to negatif numbers', () => {
      const expected = -30;
      const actual = addTwo(-5, -25);
      expect(actual).toEqual(expected);
    });
  });
});
