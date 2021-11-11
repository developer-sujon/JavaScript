/**
 * Clone Dom Element
 */

const ulContainer = document.getElementById('ulContainer');
const list = ulContainer.lastElementChild;

const cloneList = list.cloneNode(true)
cloneList.innerHTML = 'Four'
ulContainer.appendChild(cloneList);