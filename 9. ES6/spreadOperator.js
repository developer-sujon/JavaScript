/**
 *  Spread Operator JavaScript
 */

let str = 'JavaScript';
let newStr = [...str];
console.log(newStr);

let fruit1 = ['Apple', 'Pine-apple', 'Mango'];
let fruit2 = ['orange', 'Grape'];
let newFruit = 'Jackfruit';
let newArr = [...fruit1, newFruit, ...fruit2];

console.log(newArr); // Spread on Object (E38) 

let person = {
    fname: 'Mohammad',
    lname: 'Sujon'
}

let newPerson = { ...person, dob: '16-11-2000' }
console.log(newPerson);

const arr = [1,2,234,1,98,32,12]
console.log(Math.max(...arr));

const personArray = ['Mohammad', 'Sujon']

function hello(fName, lName) {
    console.log(`My First Name is ${fName} and Last Name is ${lName}`);
}

hello(...personArray);