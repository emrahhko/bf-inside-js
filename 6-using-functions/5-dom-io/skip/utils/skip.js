export const skip = (text ='', toSkip = 0) => {
  let result = '';
  for (let i = 0; i < text.length; i++) {
    if (i % toSkip !== 0) {
      continue;
      
    }
    result += text[i];
  }
  return result;
}