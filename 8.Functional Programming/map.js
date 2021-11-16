/**
 * Map Function Implementation by using Callback Function 
 */
console.clear();

const array = [1, 2, 3, 4, 5, 6];

const mapFunc = array.map(function (value, index, arr) {
    return value * value;
})
// console.log(mapFunc, array);

function myMap(arr, cb) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        let temp = cb(arr[i], i, arr);
        newArray.push(temp);
    }
    return newArray;
}

const squre = myMap(array, function (value, index, arr) {
    return value * value
});
const cube = myMap(array, function (value, index, arr) {
    return value * value * value
});
console.log(squre);
console.log(cube);
console.log(array);