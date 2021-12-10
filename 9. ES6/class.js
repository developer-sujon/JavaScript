/**
 *  Class JavaScript
 */

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.output = function() {
//     return this.name
// }

// const mohammad = new Person('Sujon', 21);

// console.log(mohammad.output());

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    output(){
        return this.name;
    }
}

const mohammad = new Person('Sujon', 21);

console.log(mohammad.output());