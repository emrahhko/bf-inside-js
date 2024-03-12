/**
 * reverses a string
 * @param {string} str - the string to reverse
 * @returns {string} the string, reversed
 */
export const reverseString = (str = '') => {
  let reversed = '';
  for (let i = 0; i < str.length; i++)
  reversed = str[i] + reversed;
  return reversed;
};
