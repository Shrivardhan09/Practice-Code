/**
 * You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.
 */
function birthdayCakeCandles(arr) {
  let sObj = {};
  let largestNumber = Number.NEGATIVE_INFINITY;

  for (let tall of arr) {
    sObj[tall] = (sObj[tall] || 0) + 1;
  }

  for (let keys in sObj) {
    if (typeof sObj[keys] === 'number' && sObj[keys] > largestNumber) {
      largestNumber = sObj[keys];
    }
  }
  console.log(sObj);
  return largestNumber;
}
console.log(birthdayCakeCandles([4, 3, 1, 3]));
