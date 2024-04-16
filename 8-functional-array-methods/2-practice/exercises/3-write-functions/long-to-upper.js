// #todo

/**
 * LongToUpper take string with a certain mininum length and copy them on Uppercase.
 * 
 * @param {Array} [arr = []] - Original array to check.
 * @param {Number} [long = 0] - The minimum length recquired to copy on Uppercase.
 * @return {Array} A new array with certain length of string in Uppercase
 */
export const longToUpper = ( arr = [], long = 0) => {
  const newArr = [];
  arr.forEach(item => {
    if (item.length >= long) {
      newArr.push(item.toUpperCase());
    } else {
      newArr.push(item);
    }
  })
  return newArr;
};

