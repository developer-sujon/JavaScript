/**
 * Event Delegation Dom Element
 */

const list = document.getElementById('ulContainer');
const button = document.getElementById('button');
const box = document.getElementById('box');

button.addEventListener('click',function(e) {
    const li = list.lastElementChild.cloneNode(true);
    li.innerHTML = 'Modify List Item';
    list.appendChild(li);
});

// [...list.children].forEach((li) => {
//     li.onclick = function(e){
//         e.target.remove();
//     }
// })

list.addEventListener('click', function(e){
    e.target.remove();
})

box.addEventListener('mousemove', function(e){
    document.getElementById('x').innerHTML = e.offsetX;
    document.getElementById('x').style.color = `rgb(${e.offsetX}, ${e.offsetY}, ${e.clientX})`;
    document.getElementById('x').style.backgroundColor = `rgb(${e.clientX}, ${e.clientY}, ${e.offsetX})`;
    document.getElementById('y').innerHTML = e.offsetY;
    document.getElementById('y').style.color = `rgb(${e.clientX}, ${e.clientY}, ${e.offsetX})`;
    document.getElementById('y').style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, ${e.clientX})`;
})