export const elimineSpace = (text = '') => {
    if (text === null) {
    throw new Error('Invalid input(null)')
  }
  return text.replace(/[^a-zA-Z]/g, '');
}