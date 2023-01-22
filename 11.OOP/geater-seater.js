/**
 * Getter Setter class object,
 */

// const Rectangle = function (width, height) {
//   this.width = width;
//   this.height = height;

//   let obj = {
//     x: 100,
//     y: 200,
//   };

//   this.sum = function () {
//     return this.width + this.height;
//   };

//   const multiply = function () {
//     return obj.x * obj.y;
//   };

//   Object.defineProperty(this, "multiply", {
//     get: function () {
//       return multiply;
//     },
//     set: function (value) {
//       obj = value;
//     },
//   });
// };

// const react1 = new Rectangle(100, 200);
// react1.multiply = {
//   x: 5,
//   y: 6,
// };

class Computer {
  constructor(name, model) {
    this.name = name;
    this.model = model;
  }

  aboutComputer() {
    console.log(
      `this computer name is ${this.name} and the model is ${this.model}`,
    );
  }

  get computerName() {
    return this.name;
  }

  set computerName(value) {
    this.name = value;
  }
}

const dell = new Computer("Dell", "sldk33");

dell.computerName = "HP";
console.log(dell.computerName);
console.log(dell);

// console.log(react1.multiply());
