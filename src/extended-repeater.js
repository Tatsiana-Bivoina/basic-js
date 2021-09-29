import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater( str, options ) {
  let result = str;
  let separatorString = '';
  let repeatStr = options.repeatTimes;
 
  if(options.hasOwnProperty('separator')) {
    separatorString = options.separator;
  } else separatorString = '+';
  if(options.hasOwnProperty('addition')) {
    let addStr = options.addition;
    for(let i = 1; i < repeatStr; i++) {
      result = result + addStr + separatorString + str;
    }
    return result + addStr;
  }

  for(let i = 1; i < repeatStr; i++) {
    result = result + separatorString + str;
  }
  return result;
}
