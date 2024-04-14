// #todo

/**
 *
 */
export const allLong = (strings = [], long = 0) => {
  const isLong = (entry ='', limit = 0) => entry.length >= long;

  const result = strings.every(isLong);
  return result;
};
