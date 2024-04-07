export const repeatString = (text = '', rep = 0) => {
  let result = ''
  for (let i = 0; i < rep; i++) {
    result += text;
  }
  return result;
}