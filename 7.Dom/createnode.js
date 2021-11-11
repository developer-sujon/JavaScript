/**
 * Create Node Element and Append Node Element
 */

// let li = document.createElement('li');
// li.className = 'list-group-item'
// li.id = 'list-item'
// li.setAttribute('title', 'list-group');
// li.innerHTML = 'Four'

// const ulContainer = document.getElementById('ulContainer');

const ul = document.getElementById('ulContainer');
const li = createElement('li', 'list-group-item', 'Four');
ul.appendChild(li);

const p1 = createElement('p', 'lead', 'Paragraph One!');
const p2 = createElement('p', 'lead', 'Paragraph Two!')

const container = document.getElementsByClassName('container')[0];

appendChild([p1,p2], container);

function createElement( tagName, className, innerHtml) {
    const tag = document.createElement(tagName);
    tag.className = className || '';
    tag.innerHTML = innerHtml || '';
    return tag;
    
}

function appendChild(childElement, parentElement) {
    Array.from(childElement).forEach(tag=>{
        parentElement.appendChild(tag);
    })
}