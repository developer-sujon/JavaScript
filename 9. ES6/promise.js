/**
 *  Promise JavaScript
 */

let promise = new Promise((resolve, reject) => {
    let a;
    setTimeout(() => {
        a = 2 + 3;
        if (a == 5) {
            resolve('Success')
        } else {
            reject('Failed')
        }
    }, 4000)
})

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
})

console.log('i am after promise');