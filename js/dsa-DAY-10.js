/* eslint-disable no-prototype-builtins */
/**
 * @description{check the second largest number from the given number array}
 * 
 * @description{find first largest number in a array}
 * 1    - iterate a loop 
 * 2    - create a largest variable assuming that index 0 is largest number - if other than index 0 has any largest number then it will store in largest variable
 * 3    - 
 */

// let arr = [1, 2, 3, 4, 5, 6, 7, 12, 40, 33, 10]
// let tempOb = {}

const largestNumber = (arr) => {
    // let tempOb = {}
    let largest = arr[0]
    let secLargest = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (largest < arr[i]) {
            secLargest = largest
            largest = arr[i]
        }

        // if (!tempOb.hasOwnProperty(arr[i])) {
        //     tempOb[arr[i]] = i
        // }
        // console.log(Object.keys(tempOb))
    }
    return secLargest
}
console.log(largestNumber([41, 2, 3, 4, 5, 6, 7, 12, 40, 33, 10]))