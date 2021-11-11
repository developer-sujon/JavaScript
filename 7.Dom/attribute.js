/**
 * Attribute Dom Element
 */

const ulContainer = document.getElementById('ulContainer');
const list = ulContainer.lastElementChild;

// console.log(list.attributes);
// console.log(list.getAttributeNames());
// console.log(list.id);

const attr = document.createAttribute('title');
attr.value = 'title';

list.setAttributeNode(attr)

console.log(list);