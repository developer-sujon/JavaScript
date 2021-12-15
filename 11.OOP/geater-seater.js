/**
 * Getter Setter class object,
 */
 console.clear();

 const Rectangle = function (width, height) {
     this.width = width;
     this.height = height;
 
     let obj = {
         x: 100,
         y: 200
     }
 
     this.sum = function () {
         return this.width + this.height;
     }
 
     const multiply = function() {
         return obj.x * obj.y;
     }

     Object.defineProperty(this, 'multiply', {
         get: function () {
             return multiply
         },
         set: function (value) {
            obj = value;
         }
     })
 
 }
 
 const react1 = new Rectangle(100, 200);
 react1.multiply = {
     x: 5,
     y: 6
 };

// console.log(react1.multiply());