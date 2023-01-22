/**
 * In software development, a prototype is a rudimentary working model of a product or information system, usually built for demonstration purposes or as part of the development process. In the systems development life cycle (SDLC) Prototyping Model, a basic version of the system is built, tested, and then reworked as necessary until an acceptable prototype is finally achieved from which the complete system or product can now be developed.
 * In prototype-based programming, a prototype is an original object; new objects are created by copying the prototype.
 * In hardware design, a prototype is a "hand-built" model that represents a manufactured (easily replicable) product sufficiently for designers to visualize and test the design.
 */

/**
 * prototype হচ্ছে এমন একটি অবজেক্ট যে অবজেক্ট আগের অবজেক্ট এর সাথে লিংক অবস্থায় থাকবে
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
// console.log(dell)
// console.log(hp)

// dell.aboutComputer()

// const arr = [2, 5, 76, 23, 33, 22];

// const evenNumber = arr.filter(element => element % 2 === 0);

// console.log(Array.prototype)
// console.log(new Array())

// console.log(evenNumber)

Array.prototype.filter = function () {
  let arr = [];

  for (let i = 0; i < this.length; i++) {
    if (this[i] % 2 === 0) {
      arr.push(this[i]);
    }
  }

  return arr;
};

const arr = [2, 5, 76, 23, 33, 22];

const evenNumber = arr.filter((element) => element % 2 === 1);

console.log(evenNumber);

console.log([2, 3, 4, 5, 6, 7].filter());
