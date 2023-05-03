/**
 * @description{alternative solutions of day 9}
 */

function uNion(arr, arr1) {
    let obj = {};
    let array1 = [];
    let length = arr.length <= arr1.length ? arr1.length : arr.length;
    for (let i = 0, j = 0, c = 0; i < length; i++, j++) {
        if (!(arr[i] in obj) && i < arr.length) {
            obj[arr[i]] = i;
            array1[c] = arr[i];
            c = c + 1;
        }
        if (!(arr1[j] in obj) && j < arr1.length) {
            obj[arr[j]] = j;
            array1[c] = arr1[j];
            c = c + 1;
        }
    }
    return array1;

}

function iNtersect(arr, arr1) {
    let obj = {};
    let obj1 = {};
    let array1 = [];
    for (let i = 0; i < arr.length; i++) {
        if (!(arr[i] in obj)) { //obj ={1:1,2:2,3:3}
            obj[arr[i]] = arr[i];
        }
    }
    for (let i = 0, c = 0; i < arr1.length; i++) {
        if (arr1[i] in obj && !(arr1[i] in obj1)) {
            obj1[arr1[i]] = arr1[i];
            array1[c] = arr1[i];
            c = c + 1;
        }
    }
    return array1;
}

console.log(iNtersect([12, 1, 2, 1, 3, 4, 2, 3, 4, 5, 6, 7, 8, 9, 1, 23], [23, 1, 2, 3, 8, 9, 10]))
console.log(uNion([12, 1, 2, 1, 3, 4, 2, 3, 4, 5, 6, 7, 8, 9, 1, 23], [23, 1, 2, 3, 8, 9, 10]))


/**
 * @description{alternative solutions of day 9}
 */


/**
 * @description{intersection}
 */

function iNtersect1(arr, arr1) {
    let obj = {};
    let obj1 = {};
    let array1 = [];
    for (let i = 0; i < arr.length; i++) {
        if (!(arr[i] in obj)) {
            obj = { 1: 1, 2: 2, 3: 3 }
            obj[arr[i]] = arr[i];
        }
    }
    for (let i = 0, c = 0; i < arr1.length; i++) {
        if (arr1[i] in obj && !(arr1[i] in obj1)) {
            obj1[arr1[i]] = arr1[i];
            array1[c] = arr1[i];
            c = c + 1;
        }
    }
    return array1;
}
console.log(iNtersect1([12, 1, 2, 1, 3, 4, 2, 3, 4, 5, 6, 7, 8, 9, 1, 23], [23, 1, 2, 3, 8, 9, 10]))

/**
  * @description{intersection sol 2}
  */
function intersecArrays(arr1, arr2) {
    let intersection = [],
        loopingArray = [],
        smallArr = [];
    if (arr1.length > arr2.length) {
        loopingArray = arr1;
        smallArr = arr2;
    }
    loopingArray = arr2;
    smallArr = arr1;
    for (let i = 0; i < loopingArray.length; i++) {
        if (smallArr.includes(loopingArray[i])) {
            intersection.push(loopingArray[i]);
        }
    }
    console.log(intersection);
}
let arr1 = [1, 2, 3, 6, 8];
let arr2 = [2, 3, 4, 7, 8, 9];
intersecArrays(arr1, arr2);