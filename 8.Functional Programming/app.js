/**
 * Function Composition in Javascript
 */

 console.clear();

 function output(input){
     console.log(input);
 };
 
 function squre(n){
     return n * n;
 }
 
 function sum(x, y){
     return x - y
 }
 
 function minus(a, b){
     return a + b
 }
 
output(squre(sum(minus(10, 5), 5)))