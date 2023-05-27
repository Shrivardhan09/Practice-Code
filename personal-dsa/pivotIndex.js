/**
 * @description{Find Pivot Index}
 */

const pivotIndex = (nums) => {
    let leftHalf = 0
    let totalSum = 0
    for (let i = 0; i < nums.length; i++) {
        totalSum += nums[i]
    }
    console.log(totalSum)
    for (let i = 0; i < nums.length; i++) {
        if (leftHalf === totalSum - leftHalf - nums[i]) {
            //i =0 ; 0 === 28  - 0 - 1
            //i=1 ; 
            console.log(leftHalf === totalSum - leftHalf - nums[i])
            return i
        }
        // console.log(leftHalf === totalSum - leftHalf - nums[i])
        leftHalf += nums[i]
    }
}

console.log(pivotIndex([1, 7, 3, 6, 5, 6]))
// console.log(pivotIndex([1, 2, 3]))
// console.log(pivotIndex([2, 1, -1]))





//
// const pivotIndex1 = (nums) => {
//     let leftSum = 0;
//     let totalSum = 0;

//     for (let i = 0; i < nums.length; i++) {
//         totalSum += nums[i];  //28
//     }

//     for (let i = 0; i < nums.length; i++) {
//         if (leftSum === totalSum - leftSum - nums[i]) {
//             return i;
//         }
//         leftSum += nums[i];
//     }

//     return -1; // Return -1 if there is no pivot index
// };

// console.log(pivotIndex1([1, 7, 3, 6, 5, 6])); // Output: 3
// console.log(pivotIndex1([1, 2, 3])); // Output: -1
// console.log(pivotIndex1([2, 1, -1])); // Output: 0


