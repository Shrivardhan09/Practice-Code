/* eslint-disable no-prototype-builtins */
// Find path of an object


/*
- Write method findPath
- Should take two params:
    - object
    - keys separated by dots as string
- Return value if it exists at that path inside the object, else return undefined
*/


const findPath = (object, path) => {
    let newPath = path.split('.')

    for (let i = 0; i < newPath.length; i++) {
        if (!object.hasOwnProperty(newPath[i])) {
            return undefined
        } else {
            console.log(object)
            object = object[newPath[i]] // obj[a][b][c]
        }
    }
    return object
};

var obj = {
    a: {
        b: {
            c: 12,
            j: false,
        },
        k: null
    }
};
console.log(findPath(obj, 'a.b.c')); // 12
console.log(findPath(obj, 'a.b')); // {c: 12, j: false}
// console.log(findPath(obj, 'a.b.d')); // undefined
// console.log(findPath(obj, 'a.c')); // undefined
// console.log(findPath(obj, 'a.b.c.d')); // undefined
// console.log(findPath(obj, 'a.b.c.d.e')); // undefined
// console.log(findPath(obj, 'a.b.j')); //false
// console.log(findPath(obj, 'a.b.j.k')); //undefined
// console.log(findPath(obj, 'a.k')); //null



