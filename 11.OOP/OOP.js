/**
 * Everything which Takes Multiple Properties to Describe is an Object.
 */

/**
 * Object Oriented is just a Theory OOP Stands on Four Main Pillar.
 * Abstraction.
 * Encapsulation.
 * Inheritance.
 * Polymorphism
 */

/**
 * There are three way to make object
 * Function Constructor
 * Classes
 * Object.create
 */

const Computer = function (name, model) {
  this.name = name;
  this.model = model;

  this.aboutComputer = function () {
    console.log(
      `this computer name is ${this.name} and the model is ${this.model}`,
    );
  };
};

const dell = new Computer("dell", "dkl25");
const hp = new Computer("hp", "dd33");
console.log(dell);
console.log(hp);

dell.aboutComputer();

// const obj = {};

// obj.name = "Mohammad Sujon";
// obj.playlist = 20;

// console.log(obj)

// 4 rules of Function Constructor

// 1. create an empty object {}
// 2. function is called this = {}
// 3. {} linked to the prototype
// 4. {} will return automatically

