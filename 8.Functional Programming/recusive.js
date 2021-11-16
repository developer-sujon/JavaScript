/**
 * Recursive Function in JavaScript
 */

 console.clear();

 const array = new Array(1, 2, 8, 2)

function sumOfarray(arr, i) {
    if (i === 0) {
        return arr[i]
    }
    return arr[i] + sumOfarray(arr, i - 1);
}

const result1 = sumOfarray(array, array.length - 1)    // 7 6 5 4 3 2 


console.log(result1);


function sum(n) {
    if (n === 1) {
        return 1
    }
    return n + sum(n - 1)
}

const result2 = sum(5)

console.log(result2);