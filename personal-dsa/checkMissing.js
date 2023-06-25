//Check missing number
// [1,2,3,5,6,7,8,9] missing number 4
// difference 1 return last value

const CheckMissingNum = (num) => {
  for (let i = 0; i < num.length; i++) {
    let diff = num[i + 1] - num[i]; // 1 +1 -1 =1 // 2 // 3 //6 //7 //8 //9

    if (diff !== 1) {
      return num[i] - 1;
    }
  }
  return -1;
};
console.log(CheckMissingNum([1, 2, 3, 6, 7, 8, 9]));

const kMissing = (num, k) => {
  let tArr = [];
  for (let i = 1; i < num.length; i++) {
    let diff = num[i] - num[i - 1];

    if (diff !== 1) {
      tArr.push(num[i] - k);
      //   num[i - 1] = num[i] + 1;
      //   i = i-1;
    }
  }
  console.log(tArr);
  return tArr;
};
console.log(kMissing([1, 2, 3, 6, 7, 8, 9], 2));

function series(input, k) {
  const arr = [];
  for (let i = 1; i < input.length; i++) {
    if (input[i - 1] + 1 !== input[i]) {
      let missing = input[i - 1] + 1;
      arr.push(missing);
      input[i - 1] = missing;
      i = i - 1;
    }
  }
  console.log(arr);
  return arr[k - 1];
}

console.log(series([1, 2, 3, 7, 8, 9, 12], 3));

// alternative
let ary = [1, 2, 3, 6, 7, 8];

let missing = [];
let k = 2;
function my(arr, n) {
  for (let i = 0; i < arr.length; i++) {
    //2
    let j = arr[i + 1]; //6
    let temp = arr[i] + 1; // 4  5
    while (temp < j) {
      // 4<6
      missing.push(temp);
      temp += 1;
    }
  }
  console.log(missing);
  return missing[n - 1];
}
console.log(my(ary, k));
