//find diagonals of the matrix and find abs values of diagonal values oif the matrix.

let arr1 = [
  [-1, 1, -7, -8],
  [-10, -8, -5, -2],
  [0, 9, 7, -1],
  [4, 4, -2, 1],
];

function absValue(arr) {
  let leftSum = 0;
  let rightSum = 0;

  for (let i = 0; i < arr.length; i++) {
    leftSum += arr[i][i];
    rightSum += arr[i][arr.length - 1 - i];
  }
  return Math.abs(leftSum - rightSum);
}
console.log(absValue(arr1));
