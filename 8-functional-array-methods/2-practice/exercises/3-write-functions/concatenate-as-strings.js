// #todo

/**
 * casts all values to a string and concatenates
 * returns a new array without modifying the original
 * @param {Array} arr - the array of values to filter
 * @returns {string} - a new array with no strings
 */

export const concatenateAsStrings = (arr = []) => {
  return arr.reduce((acc, item) => acc + String(item), '');
};


// export const concatenateAsStrings = (arr = []) => {
//   let result = '';
//   for (let i = 0; i < arr.length; i++) {
//     result = result + arr[i];
//   }
//   return result;
// };
