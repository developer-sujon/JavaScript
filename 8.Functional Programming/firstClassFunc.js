/**
 * What is First Class Function?
 * 1. A Function can Be Stored in Variables.
 * 2. A Function can Be Stored in Array.
 * 3. A Function can Be Stored in Object.
 * 4  We can Create Function as a Need.
 * 5. We can Pass Function as an Arguments
 * 6. WE can return Function form Another Function. 
 */

function add(a, b) {
    console.log(a + b);
}
const addResult = add
//addResult(15, 5);

const array = [];
array.push(addResult)
//console.log(array[0](9,1));

const obj = {
    add: addResult
}

//console.log(obj.add(20, 5));

// setTimeout(function() {
//     console.log('We can Create Function as a Need.');
// }, 1000);