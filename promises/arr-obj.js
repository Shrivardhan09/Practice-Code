let a = [1, 1, 2, 3, 4, 4, 5]
let obj = a.reduce((data, item) => {
    data[item] = true
    return data
},{})
console.log(obj)