/**
 * Reduce Function Implementation by using Callback Function 
 */
console.clear();

const array = [1, 2, 87, 3, 4, 5, 6];

// const total = array.reduce((acc, curr) => {
//     return Math.min(acc, curr)
// })

// console.log(total);

function myReduce(arr, cb, acc) {
    for (let i = 0; i < arr.length; i++) {
        acc = cb(acc , arr[i])
    }
    return acc;
}
const result = myReduce(array, function (prev, curr) {
    return prev + curr
}, 0)


console.log(result);