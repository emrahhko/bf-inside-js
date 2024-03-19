'use strict';

const reverseCase = (str) => {
  let reversedString = '';
  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i);
    if (/[a-zA-Z]/.test(char)) {
      if (char === char.toUpperCase()) {
        reversedString = reversedString + char.toLowerCase();
      } else {
        reversedString = reversedString + char.toUpperCase();
      }
    } else {
      reversedString = reversedString + char;
    }
  }
  return reversedString;
};


describe('Reverse case', () => {
  test('Hello -> hELLO', () => {
    expect(reverseCase('Hello')).toEqual('hELLO');
  });

    test('HELLO -> hello', () => {
    expect(reverseCase('HELLO')).toEqual('hello');
  });

    test('hello -> HELLO', () => {
    expect(reverseCase('hello')).toEqual('HELLO');
  });

    test('Saint-Rémy -> sAINT-réMY', () => {
    expect(reverseCase('Saint-Rémy')).toEqual('sAINT-réMY');
  });
      test('0123456 -> 0123456', () => {
    expect(reverseCase('Hello')).toEqual('hELLO');
  });
});
