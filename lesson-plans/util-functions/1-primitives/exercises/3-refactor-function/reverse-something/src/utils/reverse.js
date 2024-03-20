/**
 *Reverse a string
 *
 * @param {string} [text= ''] the string to reverse
 * @return {string} the reversed string
 */
export const reverse = (text ='') => {
  let reversedString = '';
  for (let i = 0; i < text.length; i++) {
    reversedString = text[i] + reversedString;
  }
  return reversedString;

};
