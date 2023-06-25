//longestCommonPrefix

const longestCommonPrefix = (arr) => {
  let res = 0;
  for (let i = 0; i < arr[0].length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (i >= arr[j].length || arr[0][i] !== arr[j][i]) {
        return arr[0].substr(0, res);
      }
    }
    res += 1;
  }
  return arr[0].substr(0, res);
};
console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
