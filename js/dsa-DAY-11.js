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
console.log(wordPresentOrAbsent('my name is vardhan', 'shri')) 