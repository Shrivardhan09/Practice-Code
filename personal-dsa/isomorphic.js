/* eslint-disable no-prototype-builtins */


var isIsomorphic = function (s, t) {
    if (s.length !== t.length) {
        return false
    }
    else {
        let tObj1 = {}
        let tObj2 = {}

        for (let i = 0; i < s.length; i++) {
            if (!tObj1.hasOwnProperty(s[i])) {
                tObj1[s[i]] = t[i]
            }
            if (!tObj2.hasOwnProperty(t[i])) {
                tObj2[t[i]] = s[i]
            }
            if (tObj1[s[i]] !== t[i] || tObj2[t[i]] !== s[i]) {
                return false
            }
        }
        return true
    }

}

console.log(isIsomorphic('add', 'egg'))
console.log(isIsomorphic('foo', 'bar'))


