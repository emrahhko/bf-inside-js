// #todo

/**
 * this function decides how similar two values are
 * @param {any} a - the first value
 * @param {any} b - the second value
 * @returns {string} how similar are a and b?
 */
export const similarity = (data1, data2) => {
  let result = '';
  if (data1 === data2) {
    result = 'exactly the same';
  } else if (typeof data1 === typeof data2) {
    result = 'the same type';
  } else {
    result = 'nothing alike';
  }
  return result;
};
