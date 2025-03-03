import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2) {
  const arr1 = s1.split('');
  const arr2 = s2.split('');
  let counter = 0;
  let i = 0;
  let j = 0;
  if (arr1.length === 0) {
    counter = 0;
  } else {
    while (i < arr1.length) {
      while (j < arr2.length) {
        if (arr1[i] === arr2[j]) {
          arr1.splice(i, 1);
          arr2.splice(j, 1);
          counter++;
          i--;
          j--;
        }
        j++;
      }
      i++;
      j = 0;
    }
  }
  return counter;
}
