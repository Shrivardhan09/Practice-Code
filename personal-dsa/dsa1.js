/**
 * @description{Running Sum of 1d Array}
 */

const runningSum = (nums) => {
    for (let i = 1; i < nums.length; i++) {
        nums[i] = nums[i - 1] + nums[i]
    }
    return nums
}
console.log(runningSum([1, 2, 4, 5, 6, 7]))