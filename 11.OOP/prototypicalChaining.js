/**
 * When you started learning to program, you would have encountered the term  object-oriented programming. Here we discover what it meant and you acknowledged that it is for grouping data into “objects” with attributes.
 The keyword that creates these objects in many programming languages is the class. You define a category with a constructor and a number of other public and personal functions. If you would like one class to inherit from another, you write simple inheritance syntax. You have created a sequence of inheritance. Until ES2015, the language didn’t implement a category. Instead, they used the prototype chain. The new ES6 “class” hides the inner workings of the prototype chain. Understanding how the prototype chain works is crucial if you would like to develop the performant code while using JavaScript’s OOP paradigm. For those familiar (or not so familiar) with computing, the prototype chain may be a linked list. It’s a gross oversimplification.
 */

const Computer = function (name, model) {
  this.name = name;
  this.model = model;

  // this.aboutComputer = function() {
  //     console.log(`this computer name is ${this.name} and the model is ${this.model}`)
  // }
};

Computer.prototype.aboutComputer = function () {
  console.log(
    `this computer name is ${this.name} and the model is ${this.model}`,
  );
};

const dell = new Computer("dell", "dkl25");
const hp = new Computer("hp", "dd33");

// console.log(Computer.prototype === dell.__proto__);

// console.log(dell.hasOwnProperty("name"))

// console.log(dell)
// console.log(Object.getPrototypeOf(dell));
// console.log()

// let arr = [2, 3, 5]

// let obj = {
//     name: "code abc"
// }

// console.log(obj)
// console.log(Object())
// console.log(arr)
// console.log(new Array)
