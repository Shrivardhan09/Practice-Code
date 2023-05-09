/* eslint-disable no-prototype-builtins */
/**
 * @description{to check whether the particular word is present in the given sentence or not}
 */

const wordPresentOrAbsent = (sentence, word) => {
    let tObj = {}

    let newSentence = sentence.toLowerCase().split(' ')
    let newWord = word.toLowerCase()
    if (typeof newSentence === 'string' || typeof newSentence === 'number' || typeof word === 'string' || typeof word === 'number') {
        for (let i = 0; i < newSentence.length; i++) {
            tObj[newSentence[i]] = true
        }
        if (!tObj.hasOwnProperty(newWord)) {
            return false
        }
        return true
    }
}
console.log(wordPresentOrAbsent('my name is vardhan', 'vardhan'))
// console.log(wordPresentOrAbsent('my name is vardhan', 'shri'))

/**
 * @description{to check substring char present in sentence or not}
 * 1    - create a function and pass two parameters
 * 2    -iterate a loop through string and check char of word.
 * 3   - check first letter of word present in the sentence if true then check second word.
*/

const checkSubStringChar = (str, word) => {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === word[0]) {
            let boolean = true
            for (let j = 1; j < word.length; j++) {
                if (word[j] !== str[i + j]) {
                    boolean = false
                    break
                }
                console.log(str[i + j])
                if (boolean) {
                    return true
                }
            }
        }
    }
}
// console.log(checkSubStringChar('my name is vardhan', 'ame'))
console.log(checkSubStringChar('my name is vardhan', 'me'))