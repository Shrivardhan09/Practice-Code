/**
 * step1    - handle the edge cases  fro user input(n)-if number is not <1
 * step1.1  - return error message
 * step 4   - multiples of five and three n%3 === 0 && n%5 === 0
 * step 4.1 - print FizzBuzz
 * step2    - multiples of three n%3 === 0
 * step 2.1 - print Fizz
 * step 3   - multiples of five n%5 ===0
 * step 3.1 - print Buzz
 * then iterate the loop
 */
const printFizzBuzz = (n) => {
  if (typeof n !== "number" || n < 0) {
    console.log("Enter Valid Number");
  } else {
    for (let i = 1; i < n; i++) {
      if (i % 15 === 0) {
        console.log("FizzBuzz");
      } else if (i % 3 === 0) {
        console.log("Fizz");
      } else if (i % 5 === 0) {
        console.log("Buzz");
      } else {
        console.log(i);
      }
    }
  }
};

printFizzBuzz(20);
printFizzBuzz(0);
printFizzBuzz("0");
