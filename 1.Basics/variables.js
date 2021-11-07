// Variables in js
// var, let, const

/* 
var age = 25; // Number
var name = "Mohammad Sujon"; // String
var developer = true;// Boolean
var location = null; // Null
var task; // undefined
*/

/* 
let age = 25; // Number
let name = "Mohammad Sujon"; // String
let developer = true;// Boolean
let location = null; // Null
let task; // undefined
let age= 50;
console.log(age); // SyntaxError: identifier "age" has already been declared.
*/

/* 
const age = 20; 
const job = 'developer';
const name; // SyntaxError: missing initializer
const num = 10;
num = 20; //Compiler Error: Cannot assign to 'num' because it is a constant or read-only property
*/

// Rules for creating JavaScript Variables
/*
1. Cannot start with numbers
2. Can start with letter, numbers, _ or $
3. Are case sensitive
*/


/*
var country = 'Bangladesh';

{
    var country = 'United States';
    console.log(country);
}

console.log(country);
*/


/*
let country = 'Bangladesh';

{
    let country = 'United States';
    console.log(country);
}

console.log(country);
*/

/* Most common programming case types:

1. camelCase  
2. kebab-case
3. snake_case 
4. PascalCase 
*/