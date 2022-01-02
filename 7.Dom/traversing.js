/**
 * Traversing Dom Element
 */

// const ulContainer = document.getElementById('ulContainer');

// const parentElement = ulContainer.parentElement;
// console.log(parentElement);

// const childElement = ulContainer.children
// console.log(childElement);

// const prevElement = ulContainer.previousElementSibling;
// console.log(prevElement);

// const nextElement = ulContainer.nextElementSibling;
// console.log(nextElement);

// console.log(ulContainer.firstElementChild);
// console.log(ulContainer.lastElementChild);

const lists = document.getElementsByTagName('li');
const listsArr = Array.prototype.slice.apply(lists);

// for(let i = 0; i< lists.length; i++){
//     lists[i].innerHTML = `(${i+1}). ${lists[i].innerHTML}`;
// }

Array.from(lists).forEach((list, index) => {
    list.innerHTML = `(${index+1}). ${list.innerHTML}`;
});