/**
 *  Rest Operator JavaScript
 */


let fruits = ['apple', 'grape', 'mango', 'jackfruit'];
let [first, second, ...third] = fruits;

console.log(first);
console.log(second);
console.log(third);

let person = {
    fname: 'Mohammad', lname: 'Sujon', dob: '11-16-2000'
};

let { fname, ...lname } = person

console.log(fname); console.log(lname);

let moreNum = [78, 1, 2, 5, 6];
let test = (name, ...numbers) => { // Rest,
    console.log(name); console.log(numbers);
}
test('Mohammad', 67, 3, 3);
test('Mohammad', ...moreNum); // Spread