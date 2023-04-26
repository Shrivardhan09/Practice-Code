/**
 * @description{finding second string value in first string}
 * @param {string} haystack
 * @param {string} needle
 * @returns
 */

const strStr = (haystack, needle) => {
  let result;
  for (let i = 0; i < haystack.length; i++) {
    if (haystack.substr(i, needle.length) === needle) {
      result = i;
      return result;
    }
    result = -1;
  }
  return result;
};

console.log(strStr('hello', 'll'));
