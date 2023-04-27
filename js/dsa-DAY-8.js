/**
 * @description{find first pair from num arr whose sum is equals to x }
 */

// let x = 5;
let tArr = (n, x) => {
    for (let i = 0; i < n.length; i++) {
        let firstElem = n[i]
        // console.log(firstElem)
        for (let j = i + 1; j < n.length; j++) {
            let secondElem = n[j]
            // console.log(secondElem)
            let sum = firstElem + secondElem
            // console.log(sum)
            if (sum === x) {
                return [n[i], n[j]]
            }
        }
    }
    return []
}
console.log(tArr([2, 3, 4, 5, 7, 9], 6)) // number array and x value.

/**
 * @description{find first three numbers from number array whose sum is equals to x}
 */

// let x = 6
const arr = (tp, y) => {
    for (let i = 0; i < tp.length; i++) {
        let a = tp[i]
        // console.log(a)
        for (let j = i + 1; j < tp.length; j++) {
            let b = tp[j]
            // console.log(b)
            for (let k = i + 2; k < tp.length; k++) {
                let c = tp[k]
                // console.log(c)
                let sum = a + b + c
                // console.log(sum)
                if (sum === y) {
                    return [tp[i], tp[j], tp[k]]
                }
            }
        }
    }
    return []
}
console.log(arr([2, 1, 4, 3, 2, 4, 5, 6, 7], 7)) // number array and y