/**
 * @description{}
 */

const charCount = (input, char) => {
    let count = 0
    let newInput = input.toLowerCase()
    let newChar = char.toLowerCase()
    for (let i = 0; i < newInput.length; i++) {
        if (newInput[i] === newChar) {
            count = count + 1
        }
    }
    return [{ newChar, count }]

}
console.log(charCount('AaaabbaacccCCCCcccccccccccccccde', 'c'))


const characterCheck = (input, char) => {
    let count = 0;
    let newInput = input.charCode
    for (let i = 0; i < input.length; i++) {

    }
}