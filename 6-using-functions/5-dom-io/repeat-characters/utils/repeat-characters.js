export const repeatCharacters = (text ='', rep = 0) => {
  let result ='';
  for (let i = 0; i < text.length; i++) {
    for (let j = 0; j < rep; j++)
    result += text[i];
  }
  return result;
}