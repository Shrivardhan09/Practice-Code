// problem 1:
// find first array -> sum=0 in a array
/**
 * @description{first array sum=0}
 * step1    - create a function take user input array.
 * step2    - create a variable to store arr
 * step3    - iterate a loop of first element
 * step3.1  - iterate a loop for first element j = i+1
 * step4    - if sum === 0 return array or empty array
 */
const findZeroPair = (numbers) => {
  for (let i = 0; i < numbers.length; i++) {
    const firstElem = numbers[i];
    for (let j = i + 1; j < numbers.length; j++) {
      const secondElem = numbers[j];
      const sum = firstElem + secondElem;

      if (sum === 0) {
        return [numbers[i], numbers[j]]
      }
    }
  }
  return [];
};

console.log(findZeroPair([1, 2, 3, 4, -1, 4, -1]));

// alternative solution
const findZeroPairV2 = (numbers) => {
  const register = {};

  for (let i = 0; i < numbers.length; i++) {
    const currentNum = numbers[i];
    const toFindNumber = currentNum > 0 ? currentNum * -1 : Math.abs(currentNum);

    // eslint-disable-next-line no-prototype-builtins
    if (register.hasOwnProperty(toFindNumber)) {
      return [numbers[i], register[toFindNumber]];
    } else {
      register[currentNum] =numbers[i] ;
    }
  }
};

console.log(findZeroPairV2([1, 2, 3, 4, -1, 4, -1]));

//   find first sum is zero
function findSum2(arrNum) {
  if (!Array.isArray(arrNum)) {
    return console.log('Invalid input.');
  }
  for (let i = 0; i < arrNum.length; i++) {
    if (arrNum.includes(-arrNum[i])) {
      return console.log('Pair found: ' + arrNum[i] + ' & ' + -arrNum[i]);
    }
  }
  // return console.log('No pair found.');
}
console.log(findSum2([1, 2, 3, 4, 5, -2, -3, -1]));
