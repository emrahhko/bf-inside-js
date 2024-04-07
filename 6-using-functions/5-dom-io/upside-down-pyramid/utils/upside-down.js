export const upsideDown = (text= '') => {
  let result = '';
  for (let i = 0; i < text.length; i++) {
    let file = text.slice(i) + '\n';
    result = result + file;
  }
  return result;
}