
const mergingArrayForLoop = (arr1, arr2) => {
    // let count1 = 0
    // let count2 = 0
    // let count = 0
    let tArr = []
    for (let i = 0; i < arr1.length; i++) {
        tArr.push(arr1[i])
    }
    for (let i = 0; i < arr2.length; i++) {
        tArr[arr1.length + i] = arr2[i]
    }
    console.log(tArr)
    return tArr
}

console.log(mergingArrayForLoop([5, 6, 2, 3, 5, 6, 7, 23, 1, 2, 0], [23, 45, 12, 11, 1, 3, 4, 9, 10]))