/**
 * @description{Find Pivot Index}
 */

const pivotIndex = (nums) => {
    let firstHalf = 0
    let secondHalf = 0
    let totalSum = 0
    // let remainingIndex = []

    for (let i = 0; i < nums.length / 2; i++) {
        firstHalf = firstHalf + nums[i]
        secondHalf = secondHalf + nums[nums.length - 1 - i]
        totalSum = firstHalf - secondHalf
        // console.log(totalSum)
        // if (remainingIndex.includes(i)) {
        //     remainingIndex.push(i)
        // }
        if (totalSum === 0) {
            return i
        }

    }

    return
}

console.log(pivotIndex([1, 7, 3, 6, 5, 6]))
console.log(pivotIndex([1, 2, 3]))
console.log(pivotIndex([2, 1, -1]))





// 
const pivotIndex1 = (nums) => {
    let leftSum = 0;
    let totalSum = 0;

    for (let i = 0; i < nums.length; i++) {
        totalSum += nums[i];  //28
    }

    for (let i = 0; i < nums.length; i++) {
        if (leftSum === totalSum - leftSum - nums[i]) {
            return i;
        }
        leftSum += nums[i];
    }

    return -1; // Return -1 if there is no pivot index
};

console.log(pivotIndex1([1, 7, 3, 6, 5, 6])); // Output: 3
console.log(pivotIndex1([1, 2, 3])); // Output: -1
console.log(pivotIndex1([2, 1, -1])); // Output: 0


