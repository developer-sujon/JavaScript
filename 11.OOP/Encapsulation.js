/**
 * Encapsulation is one of the fundamental concepts in object-oriented programming (OOP). It describes the idea of bundling data and methods that work on that data within one unit.
 * keep properties and methub Private. that will not work outside of the class
 */

/**
 * Encapsulation কাজ করে আমাদের কিছু private property থাকবে যেগুলো ক্লাস এর ভেতরে এক্সেস নেয়া যাবে , কিন্তু ক্লাস এর বাইরে এক্সেস নেয়া যাবেনা, public property  গুলো আমরা ক্লাস এর বাইরে এক্সেস নিতে পারবো 
 */

class Computer {
  // private field
  #warenty;
  constructor(name, model, warenty) {
    this.name = name;
    this.model = model;
    this.#warenty = warenty;
  }

  aboutComputer() {
    this.#aboutWarenty();
    console.log(
      `this computer name is ${this.name} and the model is ${this.model}`,
    );
  }

  // private method
  #aboutWarenty() {
    console.log(`${this.#warenty} years of warenty provide dell`);
  }
}

let dell = new Computer("Dell", "dk45", 3);
dell.aboutComputer();
// dell.#aboutWarenty()
