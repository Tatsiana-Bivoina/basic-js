const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
export default function dateSample( sampleActivity ) {
  let year = 0;
  let subject = 0;

  if(typeof sampleActivity !== 'string') return false;
  else {
    if(isNaN(sampleActivity) || Number(sampleActivity) == 0) return false;
    if(Number(sampleActivity) > 15 || Number(sampleActivity) < 0) return false;
  }
  subject = Math.log(MODERN_ACTIVITY/Number(sampleActivity));
  year = Math.ceil(subject / (0.693/HALF_LIFE_PERIOD));
  return year;
}
