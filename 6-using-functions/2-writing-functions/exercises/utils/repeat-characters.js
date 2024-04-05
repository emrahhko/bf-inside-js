/**
 * Returns a new string like the original one but with each character repeated.
 *
 * @param {string} [text=''] - A string to repeat each character.
 * @param {number} [num=0] - How many times to repeat each character.
 * @returns {string} The original text with each character repeated.
 */
export const repeatCharacters = (text = '', num = 1) => {
  let result = '';
  for (let i = 0; i < text.length; i++) {
    for (let j = 0; j < num; j++) {
      result = result + text[i];
    } 
  }
  return result;
};
