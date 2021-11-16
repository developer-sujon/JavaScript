/**
 * What is a pure function in JavaScript?
 * A pure function is a deterministic function. This means when a same input is passed every time, the function will return same output. In mathematical terms it is nothing but a well defined function.
 * 
 * A pure function will have the following properties
   1.It depends only on its own arguments.
   2.It wont try to change variables out of its scope.
   3.It doesn't produce any side effects.    
 */

function pureFunc(n) {
    return n * n;
}

//console.log(pureFunc(7));

var a = 12;
function notPureFunc() {
   a = 45;
}
notPureFunc();
console.log(a);


const obj = {
    a : 45,
    b : 30
}

function printFunc(obj) {
    obj.a = 100;
    obj.b = 200;
}
printFunc(obj)

console.log(obj);