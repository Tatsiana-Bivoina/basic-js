import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform( arr ) {
  let array = arr;
  let finalArray = [];
  let lastItem = array.length - 1;
 
  if(arr.constructor != Array) return Error;
  if(arr.length == 0 || arr.length >= 50) return arr;
  if(isNaN(arr[0]) && isNaN(arr[lastItem])) return array;

  for(let i = 0; i < array.length; i++) {
    if(array[i] == '--discard-next') {
      if(array[i+1] == undefined) {
        array.splice(i,1);
      }
      if(array[i+2] == '--discard-prev' || array[i+2] == '--double-prev') {
        array.splice(i,3);
      } else {
        array.splice(i,2);
      }
    }
    else if(array[i] == '--discard-prev') {
      if(array[i-1] == undefined) {
        array.splice(i,1);
      } else {
        array.splice(i-1,2);
      }
    }
    else if(array[i] == '--double-prev') {
      if(array[i-1] == undefined){
        array.splice(i,1);
      } else {
        array.splice(i, 1, array[i-1]);
      }
    }
    else if(array[i] == '--double-next') {
      if(array[i+1] == undefined){
        array.splice(i,1);
      } else {
        array.splice(i, 1, array[i+1]);
      }
      if(array[i+2] == '--double-prev') {
        array.splice(i+1, 1, array[i+1]);
      }
      if(array[i+2] == '--discard-prev') {
        array.splice(i+1, 2);
      }
    }
  }
  return array;
}
