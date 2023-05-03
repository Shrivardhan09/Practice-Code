/* eslint-disable no-prototype-builtins */
/**
 * @description{find n largest numbers}
 */

const findKthMax = (arr, k) => { //k = 3
    // k = 3
    let maxVal = arr[0];  // assuming that 0 index is largest number
    const mappingObj = {};   // to push array into obj we created empty obj

    for (let i = 1; i < arr.length; i++) {
        const currentVal = arr[i];
        if (currentVal > maxVal) {   //checking if current value is greater than max value then swap into maxval
            maxVal = currentVal;
        }

        mappingObj[currentVal] = "Ashutosh";
    }

    // After max val - k = 2 (reverse)
    //k--; // 2

    let kthVal = null;
    let i = maxVal;

    while (k > 1) {
        i = i - 1; // 8 - 1 => 7 , 7 - 1 = 6, 6 - 1 = 5, 5 - 1 = 4
        if (mappingObj.hasOwnProperty(i)) {
            kthVal = i; // 8, 5, 4
            k = k - 1; // 2, 1
        }
    }

    return kthVal;
};

console.log(findKthMax([1, 2, 3, 4, 5, 9], 3)); // 6
