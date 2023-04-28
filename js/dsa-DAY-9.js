/* eslint-disable no-prototype-builtins */
/**
 * @description{find union among two number arrays}
 * step1    - create a function pass two parameters , input is two number arrays , output is union of those arrays
 * step2    - create a blank obj variable to store both array values
 * step3    - iterate a loop of first parameter and store it in a obj - it works like if one value already exists then it
 *            wont allow duplicate number.
 * step4    - iterate another loop and store those values in a created obj variable
 *              here, when it stores values in obj - it checks if the number is not present then it allows to store.
 * step5    - return the obj to know the union values.
 */

const findUnion = (arr1, arr2) => {
    let bObj = {}
    for (let i = 0; i < arr1.length; i++) {
        if (!bObj.hasOwnProperty(arr1[i])) {
            //if there is no value present in the empty object then push array values into empty object
            bObj[arr1[i]] = arr1[i]
        }
    }

    for (let j = 0; j < arr2.length; j++) {
        if (!bObj.hasOwnProperty(arr2[j])) {
            //if there is similar number is presnt in bObj then it wont print otherwise it would take remining values
            bObj[arr2[j]] = arr2[j]
            //syntax is obj[item] = index - way of storing in a object.
        }

    }
    return Object.values(bObj)
}
console.log(findUnion([12, 1, 2, 1, 3, 4, 2, 3, 4, 5, 6, 7, 8, 9, 1, 23], [23, 34, 3, 4, 3, 2, 5, 6, 7, 8, 9, 10, 11])) 