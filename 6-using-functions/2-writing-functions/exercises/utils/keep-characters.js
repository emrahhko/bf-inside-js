/**
 * Returns a new string with only the given characters left in it.
 *
 * @param {string} [text=''] - Some text to remove characters from.
 * @param {string} [toKeep=''] - The characters to keep.
 * @returns {string} Text with only the given characters still in it.
 */
export const keepCharacters = (text = '', toKeep = '') => {
  let result = '';
  for (let i = 0; i < text.length; i++) {
    if (toKeep.includes(text[i])) {
      result += text[i];
    }
  }
  return result;
};
