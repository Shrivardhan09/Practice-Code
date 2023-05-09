/**
 * 
 * @param {[1, 4, 3, 2, 5, 10, 1, 2, 3]} arr 
 * @returns true / false
 */



const CheckSortingArray = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[i]) {
                return false
            }
        }
    }
    return true
}
console.log(CheckSortingArray([1, 4, 3, 2, 5, 10, 1, 2, 3]))
console.log(CheckSortingArray([1, 2, 3, 4, 5, 6, 7, 9]))