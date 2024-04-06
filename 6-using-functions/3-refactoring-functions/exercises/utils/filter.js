/**
 *
 */
export const filter = (toFilter = '', removeThese = '') => {
  if (!removeThese) {
    return toFilter;
  }
  let result = '';
  for (const char of toFilter) {
    if (removeThese.toLowerCase().indexOf(char.toLowerCase()) === -1) {
      result = result + char;
    }
  }

  return result;
  
};
