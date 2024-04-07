export const userInfo = (text = '') => {
  let userInput = prompt(text);

  while (userInput === '' || userInput === null) {
    userInput = prompt(text);
  }
  return userInput;
};
