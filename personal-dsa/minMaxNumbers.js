/**
 * Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.
 */

function minMax(arr) {
  let sum = arr.reduce((a, b) => a + b);
  let min = Math.min(...arr);
  let max = Math.max(...arr);

  let Mins = sum - max;
  let MaxS = sum - min;
  console.log(`${Mins} ${MaxS}`);
  return `${Mins} ${MaxS}`;
}
console.log(minMax([1, 2, 3, 4, 5]));
