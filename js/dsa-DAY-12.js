/* eslint-disable no-prototype-builtins */
/**
 * @description{transverse the sub array and put all the elements into array}
 */

const arr = [["a", "b"], ["c", "d"], ["e", "f", ["g", "h", ["i", "j"]]]]

let tObj = {}
for (let i = 0; i < arr.length; i++) {
    if (!tObj.hasOwnProperty(i))
        tObj[i] = 'i'

    for (let j = 0; j < arr[i].length; j++) {
        if (!tObj.hasOwnProperty(arr[i][j]))
            tObj[arr[i][j]] = 'j'

        if (Array.isArray(arr[i][j])) {

            for (let k = 0; k < arr[i][j].length; k++) {
                if (!tObj.hasOwnProperty(arr[i][j][k])) {
                    tObj[arr[i][j][k]] = 'k'
                }

                if (Array.isArray(arr[i][j][k])) {
                    for (let l = 0; l < arr[i][j][k].length; l++) {
                        if (!tObj.hasOwnProperty(arr[i][j][k][l])) {
                            tObj[arr[i][j][k][l]] = 'l'
                        }
                    }
                }
            }
        }
    }
}
console.log(Object.keys(tObj))
/**
 * @description{alternative solution for transversing array IT IS CALLED AS RECURSION }
 */

const tranversingArray = (arr1) => {
    let store = []
    for (let i = 0; i < arr1.length; i++) {
        if (Array.isArray(arr1[i])) {
            store.push(...tranversingArray(arr1[i]))
        } else {
            store.push(arr1[i])
        }
    }
    return store
}
console.log(tranversingArray([["a", "b"], ["c", "d"], ["e", "f", ["g", "h", ["i", "j"]]]]))