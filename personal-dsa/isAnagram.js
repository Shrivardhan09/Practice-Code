/**
 *
 * @param {*} s
 * @param {*} t
 * @returns boolean
 *
 * 1 - check the length of the strings
 * 2 - iterate a loop and increase the count of individual element and store it in storeObj
 * 3 - next check in the next string if the element of the string is present then decrease the count in storeObj
 *
 */

var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  } else {
    let storeObj = {};
    for (let string1 of s) {
      storeObj[string1] = (storeObj[string1] || 0) + 1;
    }
    for (let string2 of t) {
      if (!storeObj[string2]) {
        return false;
      } else {
        storeObj[string2] = storeObj[string2] - 1; // if the value is present then decrease the count
      }
    }
  }
  return true;
};
console.log(isAnagram('hello', 'llheo'));

function isAnagram1(str1, str2) {
  if (str1.length !== str2.length) {
    return `Strings are of not same length: ${false}`;
  } else {
    let sObj = {};
    
    for (let s1 of str1) {
      sObj[s1] = (sObj[s1] || 0) + 1;
      console.log(sObj);
    }
    for (let s2 of str2) {
      if (!sObj[s2]) {
        return `character is no matching of string 1: ${false}`;
      } else {
        sObj[s2] = sObj[s2] - 1;
      }
    }
  }
  return `Both the strings are anagram ${true}`;
}
console.log(isAnagram1('heyllo', 'lloyeh'));
