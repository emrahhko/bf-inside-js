import { elimineSpace } from './elimine-space.js';

describe('elimine space number special character from a phrase', () => {
  it('elimine space from a phrase', () => {
    const actual = elimineSpace('Salut toi');
    expect(actual).toEqual('Saluttoi');
  });
  it('elimine number from a phrase', () => {
    const actual = elimineSpace('Ceci1Est2Un3Test');
    expect(actual).toEqual('CeciEstUnTest');
  });
  it('elimine special character from a phrase', () => {
    const actual = elimineSpace('Ceci/Est*Un-Second&Test');
    expect(actual).toEqual('CeciEstUnSecondTest');
  });
  it('an Error message if the input is null', () => {
    expect(() => {
      doubleTheChars(null);
    }).toThrow(Error);
  });
});
