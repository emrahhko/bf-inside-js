/**
 *
 */
export const search = (arr = [], toSearch = '') => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes(toSearch)) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};
