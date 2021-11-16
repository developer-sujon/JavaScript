/**
 * What is Higher Oder Function?
 * 1. We can Pass Function as an Arguments
 * 2. WE can return Function form Another Function. 
 */

function sum(n1, n2) {
    return n1 + n2
}
//console.log(sum(7, 7));

function maniputate(n1, n2, func) {
    let x = n1 + n2;
    let y = n1 - n2;
    return function () {
        let s = func(n1, n2);  
        return s * x * y;
    }

}

let multiple = maniputate(15, 5, sum);

console.log(multiple());