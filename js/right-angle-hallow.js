const rightAngledHallow = (rows) => {
  let tStr = '*\n';
  for (let i = 0; i < rows - 2; i++) {
    tStr += '*';
    console.log(tStr);
    for (let j = 0; j < i; j++) {
      tStr += ' ';
      console.log(tStr);
    }
    tStr += '*\n';
  }

  for (let k = 0; k < rows; k++) {
    tStr += '*';
    console.log(tStr);
  }
  return tStr;
};
console.log(rightAngledHallow(5));

// *
// **
// * *
// *  *
// *   *
// *    *
// *     *
// *      *
// *       *
// **********

// missing number
const missingNumber = (num) => {
  for (let i = 1; i < num.length; i++) {
    let diff = num[i] - num[i - 1];
    if (diff !== 1) {
      return num[i] - 1;
    }
  }
  return -1;
};
// console.log(missingNumber([1, 2,3, 5, 6, 7, 8, 9]));
