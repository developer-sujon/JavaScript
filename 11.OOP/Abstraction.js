/**
 * Abstraction Hide something for simplicity, Abstraction is one of the key concepts of object oriented programming (OOP) languages. Its main goal is to handle complexity by hiding unnecessary details from the user. That enables the user to implement more complex logic on top of the provided abstraction without understanding or even thinking about all the hidden complexity.
 */

/**
 * Abstraction হচ্ছে hide করে কোন কিছু, সুধুমাত্র Simplify করার জন্য। কঠিন জিনিস আমাকের কাছ থেকে দূরে রাখে সহজ জিনিসটি আমাকের কাছে রাখবে। আমাদের জানার প্রয়োজন নাই এমন জিনিস আমাদের দেখাবেনা
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
    // console.log("this is hp computer");
  }

  aboutWarenty() {
    console.log(`${this.name} provider ${this.warenty} year of warenty`);
  }

  useComputer(value) {
    console.log(`${this.warenty * 12 * 30 - value * 30} day warenty remaing `);
  }
}

let hp = new Hp("HP", "dk34", 3);
hp.aboutComputer();
hp.aboutWarenty();
hp.useComputer(6.5);
// console.log(hp)
