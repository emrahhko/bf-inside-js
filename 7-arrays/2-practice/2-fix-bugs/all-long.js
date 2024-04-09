// #todo

/**
 * allLong return a boolean value that say if all the string 
 * in an array are have a certain minimum length.
 * 
 * 
 * @param {array} [string = []] - the array that will be check.
 * @apram {number} [long = 0] - the limit mesure to check the array.
 * 
 * @return {boolen} say if the array include a certain longueur length string. 
 *
 */
export const allLong = (strings = [], long = 0) => {
  let allAre = true;
  for (let i = 0; i < strings.length; i++) {
    const next = strings[i];
    if (next.length < long) {
      allAre = false;
      break;
    }
  }
  return allAre;
};
