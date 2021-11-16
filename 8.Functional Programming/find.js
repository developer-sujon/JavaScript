/**
 * Find Function Implementation by using Callback Function 
 */

console.clear();

const array = Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12);
const result1 =array.find(value => {
    return value === 349;
})

console.log(result1);

function findValue(arr, cb){
    let findValue = []
    for (let i = 0; i < array.length; i++) {
        if ( cb(arr[i])) {
            findValue = arr[i]
            break
        }else{
            findValue = undefined
        }
    }
    return findValue
}

const result2 = findValue(array, function (value){
    return value === 119
});
console.log(result2);