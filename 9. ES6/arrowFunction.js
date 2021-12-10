/**
 * Arrow function JavaScript
 */

// Define a function

// function hello() {
//     console.log("Hello World!");
// }

// Arrow Function 
// Parenthesis can be avoided when there is single paramete 
// Curly braces can be avoided when there is just single statment (not return)

// let hello = name => { console.log(name) };
let hello = name => console.log(name);

hello('Mohammad');

// Both of them are same 
//let getSquare = num => { return num*num; }; 
let getSquare = num => num * num;

console.log(getSquare(4));