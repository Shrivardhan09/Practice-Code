/* eslint-disable no-prototype-builtins */

const CheckFrequency = (nums, k) => {
  let res = {};
  for (let i = 0; i < nums.length; i++) {
    if (res.hasOwnProperty(nums[i])) {
      res[nums[i]] += 1;
    } else {
      res[nums[i]] = 1;
    }
  }
  console.log(res);
  let valar = Object.values(res);
  let keyar = Object.keys(res);
  for (let i = 0; i < valar.length; i++) {
    let temp = 0;
    let temp1 = 0;
    for (let j = i + 1; j < valar.length; j++) {
      if (valar[i] < valar[j]) {
        temp = valar[i]; //is for swaping for values
        valar[i] = valar[j];
        valar[j] = temp;
        temp1 = keyar[i]; //is for swaping keys
        keyar[i] = keyar[j];
        keyar[j] = temp1;
      }
    }
  }
  console.log({ valar }, { keyar });

  return keyar.slice(0, k);
};
console.log(CheckFrequency([1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], 2));
