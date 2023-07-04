const my = (ar) => {
    let missing = ar[0]

    for (let i = 0; i < ar.length; i++) {
        if (ar[i] !== missing) {
            console.log(missing, 'miss')
            return { missing }
        } else {
            missing += 2
        }
    }
}
console.log(my([5, 7, 9, 11, 15, 17]))

//alternative solution

const oddSeriesMissing = (arr) => {
    let missing;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] + 2 !== arr[i + 1]) {
            missing = arr[i] + 2
            break;
        }
    }
    if (missing) {
        return missing
    } else {
        return null
    }
}
console.log(oddSeriesMissing([5, 7, 9, 11, 13, 17, 19]))