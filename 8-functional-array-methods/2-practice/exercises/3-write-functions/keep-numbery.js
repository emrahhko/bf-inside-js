// #todo

/**
 * casts all array items to Number and removes NaN
 * @param {Array} arr - the array of items to coerce
 * @returns {Array} - a new array of number values
 */
export const keepNumbery = (arr = []) => {
  const newArr = [];
  arr.forEach( item => {
    const num = Number(item);
    if (!isNaN(num)) {
      newArr.push(num);
    }
  })
  return newArr;
