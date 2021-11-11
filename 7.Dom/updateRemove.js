/**
 * Update & Remove Dom Element
 */

const ulContainer = document.getElementById('ulContainer');
const firstLi = ulContainer.firstElementChild;

setTimeout(() => {
    firstLi.innerHTML += ' Modify';
    firstLi.style.backgroundColor = 'tomato';
    firstLi.classList.add('text-light');
}, 1000)

setTimeout(() => {
    firstLi.remove();
}, 3000)