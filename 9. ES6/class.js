/**
 *  Class JavaScript
 */

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.print = function() {
//         return this.age
//     }
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
    output = function(){
        return this.name;
    }

}

Person.prototype.hello = function() {
    return this.name
}

const mohammad = new Person('Sujon', 21);

// console.log(mohammad.hello());