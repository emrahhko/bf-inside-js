export const doubleTheChars = (text = '') => {
  if (text === null) {
    throw new Error('Invalid input(null)')
  }
  let doubledChars = '';
  for (let i = 0; i < text.length; i++) {
    for (let j = 0; j < 2; j++) {
      doubledChars += text[i];
    }
  }
  return doubledChars;
}