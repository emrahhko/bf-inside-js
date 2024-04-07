export const reverseString = (text ='') => {
  let result = '';
  for (let i = 0; i < text.length; i++) {
    result = text[i] + result;
  }
  return result;
}