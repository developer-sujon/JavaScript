/**
 * WeakSet in Javascript.
 */

let a = { a: 10 }, b = { b: 20 }
let set = new Set([a, b])

a = null

console.log(set)

let arr = [...set]
console.log(arr[0])

let weakSet = new WeakSet([a, b])
a = null
console.log(weakSet.has(b))