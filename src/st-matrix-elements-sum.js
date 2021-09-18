import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
export default function getMatrixElementsSum(matrix) {
  const arr = [];
  for (let i = 0; i < matrix.length; i++) {
    arr.push(matrix[i].filter((elem) => elem > 0));
  }
  const array = [].concat(...arr);
  let sum = 0;
  let lastnumber = 0;
  if (array.length === 0) {
    sum = 0;
  } else {
    for (let i = 0; i < array.length; i++) {
      if (array[i] >= lastnumber) {
        sum += array[i];
        lastnumber = array[i];
      }
    }
  }
  return sum;
}
