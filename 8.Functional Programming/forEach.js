/**
 * ForEach Function Implementation by using Callback Function 
 */

console.clear();

const arr = [1, 2, 3, 4, 5, 6];

arr.forEach(function(value, index, arr) {
    //console.log(value, index, arr);
})

// function forEach (arr, cb) {
//     let i = 0
//     while (i< arr.length){
//         cb(arr[i], i, arr);
//         i++
//     }
// }

function forEach (arr, cb) {
    for (let i = 0; i < arr.length; i++) {
        cb(arr[i], i, arr);
    }
}

forEach(arr, function(value, index, arr) {
    console.log(value+10, index, arr);
});