/**
 * Inheritance is one of the core concepts of object-oriented programming (OOP) languages. It is a mechanism where you can to derive a class from another class for a hierarchy of classes that share a set of attributes and methods.
 */

function extend(child, parent) {
    child.prototype = Object.create(parent.prototype);
}

function Shape(color) {
    this.color = color;
};

Shape.prototype.common = function () {
    return 'I\'m common functions';
};

function Sum() { };
extend(Sum, Shape)

function Multiply(color) {
    Shape.call(this, color);
};
extend(Multiply, Shape)

const shape = new Shape();
const sum = new Sum();
const multiply = new Multiply('green');

console.log(multiply.common);