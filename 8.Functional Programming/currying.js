/**
 * Currying Function in JavaScript
 */

 console.clear();

 function discount(disc) {
    return (price) => {
        return price - price * disc
    }
}

console.log(discount(.1)(1200));