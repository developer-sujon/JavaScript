const title = document.getElementById('title');

// title.style.fontSize = '30px';
// title.style.backgroundColor = 'tomato';
// title.style.color = '#fff'
// title.style.padding = '20px'

const style = {
    fontSize: '30px',
    backgroundColor: 'tomato',
    color: '#fff',
    padding: '20px',
    borderBottom: '1px solid #fff'
}

Object.assign(title.style, style);

const lists = document.getElementById('ulContainer');

[...lists.children].forEach((li)=>{
    Object.assign(li.style, style)
})

console.log(lists);