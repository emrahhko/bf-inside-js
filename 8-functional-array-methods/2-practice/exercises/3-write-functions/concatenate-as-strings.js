// #todo

/**
 * casts all values to a string and concatenates
 * returns a new array without modifying the original
 * @param {Array} arr - the array of values to filter
 * @returns {string} - a new array with no strings
 */

export const concatenateAsStrings = (arr = []) => {
  let result ='';
  arr.forEach(item => {
    result = result + String(item);
  })
  return result;
};