import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  const arr = str.split('');
  const array = [];
  let counter = 1;
  let i = 0;
  while (i < arr.length) {
    if (arr[i] === arr[i + 1]) {
      counter++;
    } else if (counter === 1) {
      array.push(`${arr[i]}`);
      arr.splice(0, counter);
      i = -1;
    } else {
      array.push(`${counter}${arr[i]}`);
      arr.splice(0, counter);
      i = -1;
      counter = 1;
    }
    i++;
  }
  return array.join('');
}
