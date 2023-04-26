/**
 * @description{check oif a string is palindrome}
 * step1    - handle the edge cases 
 * step2    - iterate a loop through string
 * step3    - if the reverse of loop should be equal to upper loop
 * step 4   - call the function
 */

const palindrome = (str) => {
  if (typeof str !== 'string') {
    return 'Not a valid input'
  }
  str = str.toLowerCase()
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false
    }
  }
  return true
}


console.log(palindrome('madam'))
console.log(palindrome('maam'))
console.log(palindrome('teacher'))

/**
 * different approach
 */

const checkPalindrome = (input) => {
  input = input.toLowerCase();
  let newStr = "";
  for (let i = 0; i < input.length; i++) {
    newStr = input[i] + newStr;
  }

  /* if (input === newStr) {
    return true;
  } else {
    false;
  } */

  return input === newStr;
};

const checkPalindromeV2 = (input) => {
  input = input.toLowerCase();
  let newStr = "";

  for (let i = input.length - 1; i >= 0; i--) {
    newStr = newStr + input[i];
  }

  /* if (input === newStr) {
      return true;
    } else {
      false;
    } */

  return input === newStr;
};

// console.log(checkPalindromeV2("Madam"));
// console.log(checkPalindrome("Madam"));
