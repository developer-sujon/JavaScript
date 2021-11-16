/**
 * Callback Function in JavaScript
 */

console.clear();

function callBack(a, b, cb) {
    let x = a + b;
    let y = a - b;
    let result = cb(x, y);
    return result;
}

function sum(x, y) {
    return x + y;
}

function sub(x, y) {
    return x - y;
}

function multiple(x, y) {
    return x * y;
}

const result1 = callBack(10, 5, sum);
console.log(result1);

const result2 = callBack(10, 5, sub);
console.log(result2);

const result3 = callBack(10, 5, multiple);
console.log(result3);

const result4 = callBack(10, 5, function(x, y) {
    return (x / y);
});
console.log(result4);