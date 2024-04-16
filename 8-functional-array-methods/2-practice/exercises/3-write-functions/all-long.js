// #todo

/**
 * allLong: checks if all the strings in an array are long.
 * 
 * @param {Array} [string = []] - The array to check
 * @param {Number} [long = 0] - The limit to say if the string are long or not.
 * @return {Boolean} that say if all string are long or not.
 */
export const allLong = (strings = [], long = 0) => {
  const isLong = (entry ='', limit = 0) => entry.length >= long;

  const result = strings.every(isLong);
  return result;
};
