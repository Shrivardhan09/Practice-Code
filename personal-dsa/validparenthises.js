/* eslint-disable no-prototype-builtins */
var isValid = function (s) {
  if (s.length % 2 !== 0 && s.length < 2) {
    return false;
  }
  let Obj = {
    '(': ')',
    '{': '}',
    '[': ']',
  };
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (Obj.hasOwnProperty(s[i])) {
      stack.push(s[i]);
      console.log(stack);
    } else if (stack.length === 0 && !Obj.hasOwnProperty(s[i])) {
      return false;
    } else if (s[i] != Obj[stack[stack.length - 1]]) {
      return false;
    } else {
      stack.pop();
    }
  }
  if (stack.length === 0) {
    return true;
  }
  return false;
};
console.log(isValid('(){}[]{}'));
