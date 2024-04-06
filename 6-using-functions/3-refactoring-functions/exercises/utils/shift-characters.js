/**
 *
 */
export const shiftCharacters = (text = '', shift = 0) => {
  let result = '';

  if (shift === 0) {
    return text;
  }

  for (const char of text) {
      const characterCode = char.charCodeAt();
  const newCharCode = characterCode + shift;
  const encodedCharacter = String.fromCharCode(newCharCode);
  result += encodedCharacter;

  }

  return result;
};
