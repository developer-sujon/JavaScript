/**
 *  Static JavaScript
 */
class Person {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.a = function () {
            return this
        }
    }
    static personCreate(personData) {
        const { name, age, email } = JSON.parse(personData);
        return new Person(name, age, email);
    }
}

