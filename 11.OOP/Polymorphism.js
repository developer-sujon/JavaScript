/**
 * The word polymorphism is used in various contexts and describes situations in which something occurs in several different forms. In computer science, it describes the concept that objects of different types can be accessed through the same interface. Each type can provide its own, independent implementation of this interface. It is one of the core concepts of object-oriented programming (OOP),
 */

/**
 * this will behave many ways. a child class can overwrite a method that inherited from parent class
 */

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
}

class Hp extends Computer {
  constructor(name, model, color) {
    super(name, model);
    this.color = color;
  }

  aboutComputer() {
    console.log(
      `this computer name is ${this.name} and the model is ${this.model} and the color is ${this.color}`,
    );
  }
}

const hp22 = new Hp("Hp22", "dk22", "black");
const hp23 = new Hp("Hp23", "dk23", "red");

hp23.aboutComputer();
