// #todo
console.log('begin');
import { keepLongStrings } from './keep-long-strings.js';

let livingThings = [
  'toad',
  'monkeys',
  'walruss',
  'bird',
  'turtles',
  'horse',
  'cat',
];

let livingThings2 = [
  'toa',
  'monkeys',
  'walruss',
  'bird',
  'turtles',
  'horse',
  'cat',
];

let livingThings3 = [
  'toa',
  'monkeys',
  'walruss',
  'bird',
  'turtles',
  'horse',
  'cat',
];




describe('keepLongStrings: checks if a string on an array is long enough to be added to a new array', () => {
  describe('a string on an array is long enough to be added to a new array', () => {
    it('some string are longer 1', () => {
      const actual = keepLongStrings(livingThings, 7);
      const expected = (livingThings = []);
      expect(actual).toEqual(expected);
    });
  });
  describe('a string on an array is long enough to be added to a new array', () => {
    it('some string are longer 2', () => {
      const actual = keepLongStrings(livingThings3, 5);
      const expected = (livingThings3 = ['monkeys', 'walruss', 'turtles']);
      expect(actual).toEqual(expected);
    });
    describe('a string on an array is long enough to be added to a new array', () => {
      it('some string are longer 3', () => {
        const actual = keepLongStrings(livingThings2, 3);
        const expected = (livingThings2 = ['monkeys', 'walruss', 'bird', 'turtles', 'horse']);
        expect(actual).toEqual(expected);
      });
    });
  });
});

console.log(livingThings);

console.log('end');
