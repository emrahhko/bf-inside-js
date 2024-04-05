// #todo

import { reverseAString } from './reverse-a-string.js';

describe('it should reverseAString strings', () => {
  describe('when no argument is passed', () => {
    it('default parameter is an empty string', () => {
      expect(reverseAString()).toEqual('');
    });
  });
  describe('when argument is a string', () => {
    it('the empty string should return an empty string', () => {
      expect(reverseAString('')).toEqual('');
    });
    it('"toads" should return "sdaot"', () => {
      expect(reverseAString('toads')).toEqual('sdaot');
    });
    it('"Emrah" should return "harmE"', () => {
      expect(reverseAString('Emrah')).toEqual('harmE');
    });
    it('"salut" should return "tulas"', () => {
      expect(reverseAString('salut')).toEqual('tulas');
    });
    it('"bye" should return "eyb"', () => {
      expect(reverseAString('bye')).toEqual('eyb');
    });
    it('"Bruxelles" should return "sellexurB"', () => {
      expect(reverseAString('Bruxelles')).toEqual('sellexurB');
    });
    it('"Link" should return "kniL"', () => {
      expect(reverseAString('Link')).toEqual('kniL');
    });
    // write at least 5 more tests
  });
  describe('when argument is not a string', () => {
    it('true should return "text is not a string"', () => {
      expect(reverseAString(true)).toEqual('text is not a string');
    });
    // write at least 3 more tests
    it('a number should return "text is not a string"', () => {
      expect(reverseAString(61)).toEqual('text is not a string');
    });
        it('"null" should return "text is not a string"', () => {
      expect(reverseAString(null)).toEqual('text is not a string');
    });
            it('"Object" should return "text is not a string"', () => {
      expect(reverseAString(Object)).toEqual('text is not a string');
    });
  });
});
