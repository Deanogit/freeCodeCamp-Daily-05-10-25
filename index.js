// Space Week Day 2: Exoplanet Search
// For the second day of Space Week, you are given a string where each character represents the luminosity reading of a star. Determine if the readings have detected an exoplanet using the transit method. The transit method is when a planet passes in front of a star, reducing its observed luminosity.

// Luminosity readings only comprise of characters 0-9 and A-Z where each reading corresponds to the following numerical values:
// Characters 0-9 correspond to luminosity levels 0-9.
// Characters A-Z correspond to luminosity levels 10-35.
// A star is considered to have an exoplanet if any single reading is less than or equal to 80% of the average of all readings. For example, if the average luminosity of a star is 10, it would be considered to have a exoplanet if any single reading is 8 or less.
function hasExoplanet(readings) {
  // console.log(readings)
  const scoreStr = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const scoreArr = scoreStr.split('');
  const calcArr = [];

  // loop reading, get index & push to arr
  for (const x of readings) {
    calcArr.push(scoreStr.indexOf(x));
  }
  console.log(calcArr);

  // get average
  const arrTotal = calcArr.reduce(
    (a, b) => Number.parseInt(a) + Number.parseInt(b),
    0
  );
  console.log(arrTotal);
  const avg = arrTotal / calcArr.length;
  console.log(avg.toFixed(2));

  // get threshold
  const threshold = avg * 0.8;
  console.log(threshold);

  // check for dip
  for (const x of calcArr) {
    if (x <= threshold) {
      return true;
    }
  }

  return false;
  //console.log(scoreArr)
  // return readings;
}

hasExoplanet('MONOPLONOMONPLNOMPNOMP');
