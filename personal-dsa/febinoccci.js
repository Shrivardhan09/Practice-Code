const fibinocci = (n, prevNumber = []) => {
  if (prevNumber[n] != null) {
    return prevNumber[n];
  }
  let result;
  if (n <= 2) {
    result = 1;
  } else {
    result = fibinocci(n - 1, prevNumber) + fibinocci(n - 2, prevNumber);
  }
  prevNumber[n] = result;
  return result;
};
console.log(fibinocci(20));

//
