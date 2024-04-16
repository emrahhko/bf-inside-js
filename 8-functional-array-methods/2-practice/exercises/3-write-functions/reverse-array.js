// #todo

/**
 *ReverseArray take an array return a new one with it's element reversed.
 *
 * @param {Array} [arr = []] - The array to reverse. 
 * @return {Array} - The new array with it's element reversed
 */

export const reverseArray = (arr = []) => {
  const newArr = arr.slice().reverse();
  return newArr;
