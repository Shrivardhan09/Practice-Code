/**
 * const arr = [1, 2, 3, [1, 2, 3, 1, [1, [1, 2, 7, 8, 9], 2]], 1, [1, 2]];
 */

const flapArray = (arr) => {
    let store = []
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            store.push(...flapArray(arr[i]))
        } else {
            store.push(arr[i])
        }
    }
    return store
}
console.log(flapArray([1, 2, 3, [1, 2, 3, 1, [1, [1, 2, 7, 8, 9], 2]], 1, [1, 2]]))