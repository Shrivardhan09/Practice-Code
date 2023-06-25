function factorial(n) {
    if (n === 0 || n === 1) {
        return 1
    }
    return n * factorial(n - 1)

}
console.log(factorial(9))


//closure
function outer() {
    let outerVariable = 10
    return function inner() {
        let innerVariable = 20
        console.log(outerVariable + innerVariable)
    }
}
let closure = outer()
closure()

function lexiOuter() {
    let outerValue = 30
    function lexiInner() {
        let innerValue = 30
        console.log(outerValue + innerValue)
    }
    lexiInner()
}
lexiOuter()