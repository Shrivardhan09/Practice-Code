/**
 * 
 * @param {Largest number in an array} arr 
 * @returns maxValue
 */
const largestElem = (arr) => {
    let maxValue = 0
    for (let i = 0; i < arr.length; i++) {
        if (maxValue < arr[i]) {
            maxValue = arr[i]
        }
    }
    return maxValue
}
console.log(largestElem([1, 2, 3, 4, 5, 6, 44, 3, 7]))