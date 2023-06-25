/**
 * Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.
 * Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to 10^-4 are acceptable.
 */
let arr1 = [1, -2, -7, 9, 1, -8, -5];

function plusMinus(arr) {
  let n = arr.length;
  let sumP = 0;
  let sumN = 0;
  let sumZ = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sumP += 1;
    }
    if (arr[i] < 0) {
      sumN += 1;
    }
    if (arr[i] === 0) {
      sumZ += 1;
    }
  }

  let positiveRatio = (sumP / n).toFixed(6);
  let negativeRatio = (sumN / n).toFixed(6);
  let zeroRatio = (sumZ / n).toFixed(6);
  //   return `${positiveRatio}\n${negativeRatio}\n${zeroRatio}`;

  console.log(positiveRatio);
  console.log(negativeRatio);
  console.log(zeroRatio);
}
console.log(plusMinus(arr1));
