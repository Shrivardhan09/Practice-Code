var input = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

// Output -> Hint - Sprial in clockwise order
// [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10];
// [1, 2, 3, 4, 8, 12, 16, 15, 14, 5, 9, 13, 6, 7, 11, 10]

const results = [];

for (let i = 0; i < input.length; i++) {
  const currentRow = input[i]; // [5,6,7,8]
  const fRowLen = currentRow.length - i; // 4-1 = 3

  const lastCol = input.length; // 4
  const bottomRow = input[input.length - 1 - i]; // input[4 -1 - i] -> input[3 -0] -> input[3] -> [13, 14, 15, 16]
  const firstCol = input.length; // 4

  for (let j = i; j < fRowLen; j++) {
    // j = 0; j < 4
    results.push(currentRow[j]); // 1,2,3,4
    // input[i][j] // 1,2,3,4
    //console.log("37:", currentRow[j]);
  }

  // lastCol - i => input.length - i => 4 - i => 4 - 0 => 4
  for (let k = i + 1; k < lastCol - i; k++) {
    // k = i + 1 => 0 + 1  1
    const lastColIndexVal = input[k][lastCol - 1 - i]; // input[4 -1 -i] => input[3-0] => input[3]
    results.push(lastColIndexVal);
    //console.log("43:", lastColIndexVal);
  }

  // l = bottomRow.length - 2 - i = 4 -2 - 0 => 2
  for (let l = bottomRow.length - 2 - i; l > i; l--) {
    const lastRowIndexVal = bottomRow[l];
    results.push(lastRowIndexVal);
    //console.log("49:", lastRowIndexVal);
  }

  // m = 4 - 1 - 0 => 3
  for (let m = firstCol - 1 - i; m > i; m--) {
    const firstColIndexVal = input[m][i];
    results.push(firstColIndexVal);
    //console.log("55:", firstColIndexVal);
  }
}

console.log(results);

// New

let resultsV2 = [];
for (let i = 0; i < input.length; i++) {
  const currentRow = input[i];
  const fRowLen = currentRow.length - i;
  const lastCol = input.length;
  const bottomRow = input[input.length - 1 - i];
  // const firstCol = input.length;

  for (let j = i; j < fRowLen; j++) {
    resultsV2.push(currentRow[j]);
    //console.log("37:", currentRow[j]);
  }

  const firstColElems = [];
  for (let k = i + 1; k < lastCol - i; k++) {
    console.log('41: ', { k, lastCol, i });
    const lastColIndexVal = input[k][lastCol - 1 - i];
    const firstColIndexVal = input[k][i];
    resultsV2.push(lastColIndexVal);
    firstColElems.push(firstColIndexVal);
    //console.log("43:", lastColIndexVal);
  }

  for (let l = bottomRow.length - 2 - i; l > i; l--) {
    const lastRowIndexVal = bottomRow[l];
    resultsV2.push(lastRowIndexVal);
    //console.log("49:", lastRowIndexVal);
  }

  console.log('__', firstColElems);
  resultsV2 = resultsV2.concat(firstColElems);
}

console.log({ resultsV2 });
