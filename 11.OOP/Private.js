/**
 * Private Property for class object properties,
 */

const Rectangle = function (width, height) {
  this.width = width;
  this.height = height;

  const obj = {
    x: 100,
    y: 200,
  };

  this.sum = function () {
    return this.width + this.height;
  };

  const multiply = function () {
    return this.width * this.height;
  };
};

const react1 = new Rectangle(100, 200);
console.log(react1.multiply);
