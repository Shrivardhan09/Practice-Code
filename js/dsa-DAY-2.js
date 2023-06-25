/**
 * @description{ tree star pattern}
 * create a function - triangleStarPattern
 * step1    - handle the edge cases
 * step2    - iterate a loop in row -i
 * step2.1  - iterate a loop which works as a spaces according to reverse order of  i.
 * step2.2  - itrate a loop which print * - k loop which prints odd number of loops.
 * step3    - store it in a variable and return it
 * step4    - iterate the loop and call the function
 */
const treeStarPattern = (n) => {
  if (typeof n !== 'number' || n <= 0) {
    return 'Enter Valid Number';
  } else {
    let result = '';
    for (let i = 1; i <= n; i++) {
      let triangle = ' ';
      for (let j = 1; j <= n - i; j++) {
        triangle += ' ';
      }
      for (let k = 1; k <= 2 * i - 1; k++) {
        triangle += '^';
      }
      result += triangle + '\n';
    }
    return result;
  }
};
console.log(treeStarPattern(5));

/**
 * @description{ reverse tree star pattern}
 * create a function - triangleStarPattern
 * step1    - handle the edge cases
 * step2    - iterate a loop in row -i
 * step2.1  - iterate a loop which works according to i i.e j
 * step2.2  - itrate a loop which print * - k loop
 * step3    - store it in a variable and return it
 * step4    - iterate the loop and call the function
 */
const reverseTreeStarPattern = (n) => {
  if (typeof n !== 'number' || n <= 0) {
    return 'Enter Valid Number';
  } else {
    let result = '';
    for (let i = n; i >= 1; i--) {
      let triangle = ' ';
      for (let j = 1; j <= n - i; j++) {
        triangle += ' ';
      }
      for (let k = 1; k <= 2 * i - 1; k++) {
        triangle += '*';
      }
      result += triangle + '\n';
    }
    return result;
  }
};
console.log(reverseTreeStarPattern(5));

// /**
//  * @description{diamond pattern}
//  * create a function
//  * step1    - handle the edge cases
//  * step2    - create a variable to store the output of loops
//  * step2.1  - iterate a loop - i
//  * step2.2  - iterate inner loop and create a variable to find middle row of the diamond pattern ( distance to middle row)
//  * step2.3  -
//  */
// const rows = 10;
// const middleRow = Math.floor(rows / 2) + 1;

// for (let i = 1; i <= rows; i++) {
//   let asterisks = '';
//   const distanceFromMiddleRow = Math.abs(i - middleRow);

//   for (let j = 1; j <= rows; j++) {
//     const distanceFromMiddleColumn = Math.abs(j - middleRow);

//     if (distanceFromMiddleColumn + distanceFromMiddleRow < middleRow) {
//       asterisks += '*';
//     } else {
//       asterisks += ' ';
//     }
//   }

//   console.log(asterisks);
// }
