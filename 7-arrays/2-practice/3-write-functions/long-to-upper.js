// #todo

/**
 * 
 * longToUpper: copy certain strings that have a certain length, in a new array upper case.
 * 
 * @param {array} [arr = []] - array to iterate;
 * @param {number} [long] - the minimum longer of length to copy on uppercase
 * 
 * @return {array} the new array with certain string on uppercase. 
 *
 */


export const longToUpper = (arr = [], long = 0) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length >= long) {
      newArr.push(arr[i].toUpperCase());
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};
