/**
 * WeakMap in Javascript.
 */

let weakMap = new WeakMap([[a, 45], [b, 75]])

a = null

console.log(weakMap.get(a))
console.log(weakMap.has(a))
console.log(weakMap.has(b))