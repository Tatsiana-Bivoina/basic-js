import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  const array = n.toString().split('');
  let prevNumber = '0';
  let currentNumber = '0';
  array.forEach((elem, i) => {
    array.splice(i, 1);
    currentNumber = array.join('');
    array.splice(i, 0, elem);
    if (currentNumber > prevNumber) {
      prevNumber = currentNumber;
    }
  });
  return Number(prevNumber);
}
