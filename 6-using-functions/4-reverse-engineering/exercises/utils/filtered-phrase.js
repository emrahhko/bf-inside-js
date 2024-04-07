export const filteredPhrase = (text = '') => {
  let finalPhrase = ''
  for (let i = 0; i < text.length; i++) {
    if (text[i] === finalPhrase.slice(-1)) {
      continue;
    }
    finalPhrase += text[i];
  }
  return finalPhrase;
}
