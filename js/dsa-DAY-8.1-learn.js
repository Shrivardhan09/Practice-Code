/* eslint-disable no-prototype-builtins */
/**
 * -  To find a first three elements from a number array whose sum is X
 *   X = 6
 *   arr = [1,2,3,4,5,6] // 1,2,3
 *Algorithm:-
 * Use function with two paramters i.e input array=arr & sum value=X
 * Traverse over arr using two for loops & find complement no.
 * Check whether this complement no is available in obj if yes push it to new array arr1.
 * If not then add element as key in the object
 */

function sumPair(arr, X) {
    const arr1 = [];

    for (let i = 0; i <= arr.length - 1; i++) {
        const obj = {};
        for (let j = i + 1; j <= arr.length - 1; j++) {
            if (arr[i] + arr[j] <= X) {
                const firstTwoNoSum = arr[i] + arr[j];
                const remValue = X - firstTwoNoSum;
                if (obj.hasOwnProperty(remValue)) {
                    arr1.push([arr[i], arr[j], remValue]);
                } else {
                    obj[arr[j]] = j;
                }
            }
        }
    }
    console.log(arr1);
    console.log(arr1[0]);
}
sumPair([1, 2, 3, 4, 5, 6], 10);

sumPair([1, 2, 3, 4, 5, 6], 10);








/**
 * @description{optimised version}
 * @param {8} arr 
 * @param {*} X 
 * @returns 
 */

const sumPairV2 = (arr, X) => {
    const pairs = [];

    for (let i = 0; i <= arr.length - 1; i++) {
        const mapping = {};
        const firstVal = arr[i];

        for (let j = i + 1; j <= arr.length - 1; j++) {
            const secondVal = arr[j];
            const firstTwoNoSum = firstVal + secondVal;

            if (firstTwoNoSum > X) {
                continue;
            }

            const thirdVal = X - firstTwoNoSum;
            if (!mapping.hasOwnProperty(thirdVal)) {
                mapping[secondVal] = j;
                continue;
            }

            pairs.push([firstVal, secondVal, thirdVal]);
        }
    }
    console.log(pairs);
    console.log(pairs[0]);

    return pairs;
};

sumPairV2([1, 2, 3, 4, 5, 6], 10);
sumPairV2([1, 2, 3, 4, 5, 6], 10);
