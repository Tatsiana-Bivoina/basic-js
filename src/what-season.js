import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason( date ) {
  if(arguments.length == 0) return 'Unable to determine the time of year!';

  if(Object.prototype.toString.call(date) === '[object Date]') {
    if(typeof date.getTime() == 'number') {
      let month = date.getMonth();
 
      if(month >= 11 || month <= 1) return 'winter';
      if(month >= 2 && month <= 4) return 'spring';
      if(month >= 5 && month <= 7) return 'summer';
      if(month >= 8 && month <= 10) return 'autumn';
    } else throw new TypeError("Invalid date!");

  } else throw new TypeError("Invalid date!");

}
