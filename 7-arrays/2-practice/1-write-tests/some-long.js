/**
 * 
 * someLong will iterate thru an array and return a boolean value (true or false)
 * if the array includes a string with the minimum recquired length
 * 
 *@param {array} [strings = []] - an array of string.
 *@param {number} [long = 5] - the minimum limit for for the string length 
 *
 * @return {boolean} that say if the array has a string of a 
 * certain minimum length. 
 */
export const someLong = (strings = [], long = 0) => {
  let someAreLong = false;
  for (const string of strings) {
    if (string.length >= long) {
      someAreLong = true;
      break;
    }
  }
  return someAreLong;
};
