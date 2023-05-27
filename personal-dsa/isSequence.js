/* eslint-disable no-prototype-builtins */
var isSubsequence = function (a, b) {
    if (typeof a !== 'string' && typeof b !== 'string') {
        return false
    }
    else {
        let newA = a.toLowerCase()
        let newB = b.toLowerCase()
        let j = 0 //to check if index 0 value of newA matches with newB then we increase 

        for (let i = 0; i < newB.length; i++) {
            if (newA[j] === newB[i]) {
                // console.log(newA[j])
                console.log(newB[i])
                j = j + 1
            }
        }
        return j === newA.length // if j is equals to newA. length then it is subsequence of newB
    }
};
console.log(isSubsequence('axc', 'abcdef'))
console.log(isSubsequence('abc', 'abdecf'))