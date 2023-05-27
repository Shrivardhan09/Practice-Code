/**
 * step1    - @description{find palindrome }
 * step3    - create  a function to take user input
 *          - handle the edge cases :
 *          - converting userInput to lowerCase
 *          - accepting only the string
 *          - output should be the palindrome string
 * step3    - iterate a loop and know wheather string is equals to reverse of same string
 * step4    - iterate the loop and call the function and pass string 
 * 
 * step5    - @description{finding palindromes ina sentence} 
 *          - create a variable store sentence 
 *          - and split it through spaces and iterate a loop 
 *          - and remove all the special characters from it through replace and use regexp
 *          - passing it in a palindrome function to check how many palindromes are present ina sentence
 * 
 *  step6   - @description{finding longest palindrome in a above array}
 *          - create a function to pass user input 
 *          - create a variable to store value
 *          - iterate a loop and compare the length of index and variable we created to store values
 */


const palindrome = (str) => {
    if (typeof str !== 'string') {
        return 'Not a valid input'
    }
    str = str.toLowerCase()
    for (let i = 0; i < Math.floor(str.length / 2); i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false
        }
    }
    return true
}
// console.log(palindrome('mam'))
let res = []
let myVar = 'Hello Mam, how are you. Madam, do you know racecar?'
let sp = myVar.split(' ')
for (let i = 0; i < sp.length; i++) {
    let a = sp[i].replace(/[^a-zA-Z0-9]/g, '')
    if (palindrome(a)) {
        res.push(a)
    }
}
console.log(res)

function longestPalindrome(p) {
    let b = '';
    for (let j = 0; j < p.length; j++) {
        if (p[j].length > b.length) {
            b = p[j]
        }
    }
    return b
}
console.log(longestPalindrome(res))