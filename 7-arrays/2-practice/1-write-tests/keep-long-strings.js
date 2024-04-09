/**
 *
 * keepLongStrings check if the length of a string in an array is longer
 *  than the limiter (given by the user). and if so adding them
 * to a new array.
 * 
 * @param {array} [strings] - array of strings.
 * @param {number} [long] - the limiter that say is the string is added to a new array
 * 
 * @return {array} the new array with the length of strings longer than the limiter.
 */
export const keepLongStrings = (strings = [], long = 0) => {
  const longStrings = [];
  for (const string of strings) {
    if (string.length > long) {
      longStrings.push(string);
    }
  }
  return longStrings;
};
