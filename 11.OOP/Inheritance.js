/**
 * Inheritance is one of the core concepts of object-oriented programming (OOP) languages. It is a mechanism where you can to derive a class from another class for a hierarchy of classes that share a set of attributes and methods.
 */

/**
 * Inheritance child class will take matching properties and values from parent class
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
  constructor(name, model, warenty) {
    super(name, model);
    this.warenty = warenty;
  }

  aboutWarenty() {
    console.log(`${this.name} provider ${this.warenty} year of warenty`);
  }
}

let hp = new Hp("HP", "dk34", 3);
// hp.aboutComputer()
// hp.aboutWarenty()
