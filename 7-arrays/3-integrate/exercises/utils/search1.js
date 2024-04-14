export const search1 = (arr = [], toSearch = '') => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes(toSearch)) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};
