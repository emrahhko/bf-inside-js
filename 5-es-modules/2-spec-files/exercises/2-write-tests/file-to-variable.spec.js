// #todo

import { fileToVariable } from './file-to-variable.js';

describe('fileToVariable converts a kebab-case file name from to camel-case variable name', () => {
  describe('convert a kebab case variable name to camel case', () => {
    it ('convert from kebab case to camel case', () => {
      const actual = fileToVariable('number-of-donuts');
      expect(actual).toEqual('numberOfDonuts');
    })
        it (' another convert from kebab case to camel case', () => {
      const actual = fileToVariable('ebeyin-zurnasi');
      expect(actual).toEqual('ebeyinZurnasi');
    })
        it (' another one convert from kebab case to camel case', () => {
      const actual = fileToVariable('films-to-watch');
      expect(actual).toEqual('filmsToWatch');
    })
        it ('and another one convert from kebab case to camel case', () => {
      const actual = fileToVariable('books-to-read');
      expect(actual).toEqual('booksToRead');
    })
  })
})

