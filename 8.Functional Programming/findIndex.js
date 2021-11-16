/**
 * FindIndex Function Implementation by using Callback Function 
 */

 console.clear();

 const array = Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12);
 
 const result1 = array.findIndex(value =>{
     return value === 11
 })
 //console.log(result1);
 
 function findIndex(arr, cb){
     let indexOf = [];
     for (let i = 0; i < arr.length; i++) {
         if (cb(arr[i], i, arr)) {
             indexOf = i
             break
         }else{
             indexOf = undefined
         }
     }
     return indexOf
 }
 
 const result = findIndex(array, function(value){
     return value == 9
 });
 
 console.log(result);