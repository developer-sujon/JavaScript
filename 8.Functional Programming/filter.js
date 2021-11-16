/**
 * Filter Function Implementation by using Callback Function 
 */

const {
    lightgoldenrodyellow
} = require("color-name");

console.clear();

const array = [1, 2, 3, 4, 5, 6];

const filrer = array.filter(function (value, index, array) {
    return index
})

// console.log(filrer);

function myFilter(arr, cb) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (cb(array[i])) {
            newArray.push(arr[i]);
        }
    }
    return newArray;
}

let result = myFilter(array, function (value) {
    return value % 2 === 1
});
console.log(result);