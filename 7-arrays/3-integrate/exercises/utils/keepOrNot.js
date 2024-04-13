export const keepOrNot = (arr) => {
  const newArr= []; 
  let userConfirm = '';
  for (let i =0; i < arr.length; i++) {
    userConfirm = confirm(`you want to keep "${arr[i]}"`);
    if (userConfirm) {
    newArr.push(arr[i]);
   }
  }
  return newArr;
}
