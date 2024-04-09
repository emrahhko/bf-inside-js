// #todo

import { someLong } from './some-long.js';

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

describe(' check if the array includes a string with the minimum recquired length', () => {
  it('the array include a string with certain minium length', () => {
    const actual = someLong(livingThings, 5);
    const expected = (livingThings = true);
    expect(actual).toEqual(expected);
  });
});

describe('check if an array include a string with a certain length', () => {
  it("the array doesn't include a string with certain minimum length)", () => {
    const actual = someLong(livingThings2, 10);
    const expected = (livingThings2 = false);
    expect(actual).toEqual(expected);
  });
});

describe('check if an array include a string with a certain length', () => {
  it('the array includes a string with a minimum of 6 length', () => {
    const actual = someLong(livingThings3, 6);
    const expected = (livingThings3 = true);
    expect(actual).toEqual(expected);
  });
});
