/**
 * @description{Star Pattern}
 * create a function.
 * step1    - handle the errors from user, entering only postive numbers, not even zero , only numbers.
 * step2    - create a loop of i which works in y- direction
 * step2.1  - create a loop of j which works in x direction  printing '*' which is connected to i loop
 * step3    - iterate the loop and call the function
 */
const starPattern = (n) => {
  if (typeof n !== 'number' || n <= 0 || null) {
    console.log('Enter Positive Numbers');
  } else {
    for (let i = 1; i <= n; i++) {
      let result = '';
      for (let j = 1; j <= i; j++) {
        result += '*';
      }
      console.log(result);
    }
  }
};
starPattern(10);

/**
 * @description{Reverse Star Pattern}
 * create a function - reverseStarPattern
 * step1    - handle the edge cases - only positive number || no negative numbers || should not equal to zero
 * step2    - create a loop of i and works in y - direction
 * step2.1  - create a loop which works opposite to y-direction i.e x-direction
 * step3    - iterate the loop and call the function.
 */
const reverseStarPattern = (n) => {
  if (typeof n !== 'number' || n <= 0) {
    console.log('Enter Positive Numbers');
  } else {
    for (let i = n; i >= 0; i--) {
      let row = '';
      for (let j = i; j >= 1; j--) {
        row += '*';
      }
      console.log(row);
    }
  }
};
reverseStarPattern(10);

/**
 * @description{stars in rows}
 * create a function  - printStars
 * step1    - handle the edge cases of user null || positive numbers || more than zero
 * step2    - create a loop works in column - i
 * step2.1  - create a loop works in row -j
 * step3    - iterate the loop
 */
const printStars = (n) => {
  if (typeof n !== 'number' || n <= 0) {
    console.log('Enter Positive Numbers');
  } else {
    for (let i = 1; i <= n; i++) {
      //   console.log(i);
      let row = '';
      for (let j = 1; j <= n; j++) {
        // console.log(j);
        row += '*';
      }
      console.log(row);
    }
  }
};
printStars(5);

/**
 * @description{Number Pattern}
 * create a function numberPattern
 * step1    - handle edge cases
 * step2    - create a loop that works in col - i
 * step2.1  - create a loop that works in row -j
 * step 3   - iterate and call the function.
 */

const numberPattern = (n) => {
  if (typeof n !== 'number' || n <= 0) {
    console.log('Enter Positive Numbers');
  } else {
    for (let i = 1; i <= n; i++) {
      let num = '';
      for (let j = i; j <= n; j++) {
        num += i;
      }
      num += '\n';
      console.log(num);
    }
  }
};

numberPattern(7);

/**
 * @description{Number pattern rev}
 * create a function
 * step1    - handle edge cases
 * step2    - iterate a loop in column
 * step2.1  - iterate a loop in row-j works in favour of i
 * step3    - iterate the loop and call the function
 */

const revNumberPattern = (n) => {
  if (typeof n !== 'number' || n <= 0) {
    console.log('Enter Positive Numbers');
  } else {
    for (let i = 1; i <= n; i++) {
      let num = '';
      for (let j = i; j <= n; j++) {
        // j=i which works as input of i
        num += j;
      }
      console.log(num);
    }
  }
};
revNumberPattern(7);
