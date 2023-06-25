/**
 * @description{vowel count}
 * create a function
 * step1    - handle edge cases
 * step2    - create a variables for storing string and for count
 * step2    -iterate a loop for a string and then make it to lowercase and store it in variable.
 * step2.1  - make a statement if a,e,i,o,u is there then count should increase or remain same
 * step3    - iterate a loop and
 */

let myString = 'My name is Vardhan';
let newString = '';
let count = 0;

for (let i = 0; i < myString.length; i++) {
  let char = myString[i].toLowerCase();

  if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
    count += 1;
  } else {
    count += 0;
  }
  newString += char;
}
console.log(`Your String : ${newString}`);
console.log(`Vowels in a string are :  ${count}`);

/**
 * @description{string reversing}
 * Take a string form user
 * create a variable to store the value
 * step1    - iterate a loop from reverse n-1
 * step2    - and store a value
 */
let str = 'Shrivardhan';
let myMirrorStr = '';

for (let i = str.length - 1; i >= 0; i--) {
  myMirrorStr += str[i];
}
console.log(`Your String : ${str}`);
console.log(`Your Mirror String : ${myMirrorStr}`);

/**
 * @description{finding weather a alphabet is vowel or consonant}
 * step 1   - know the input and output
 * step2    - create a function taking input from the user and handle edge cases
 * step3    - create an array of vowels in it.
 * sterp3.1 - iterate a loop of array if arr matches the user input it gives you solution weather it is vowel or consonant
 * step4    - iterate a loop and call the function
 */

const vowelOrConsonant = (str) => {
  if (typeof str !== 'string' || str.length === 0 || str === null) {
    return 'enter valid input';
  } else {
    let arr = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== str) {
        return 'Consonant';
      } else {
        return 'Vowel';
      }
    }
  }
};
console.log(vowelOrConsonant('a'));
console.log(vowelOrConsonant('f'));
console.log(vowelOrConsonant(''));
console.log(vowelOrConsonant(123));
