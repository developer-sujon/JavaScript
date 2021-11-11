const postsList = document.getElementById('posts');
const button = document.getElementsByTagName('button')[0];
const URL = 'https://jsonplaceholder.typicode.com/posts';

button.onclick = function() {
    fetch(URL)
    .then(response => response.json())
    .then(posts => {
        // posts.forEach((post, index) => {
        //     let li = createLiElement(post, index);
        //     postsList.appendChild(li);
        // });

        posts.map((post, index) => {
            let li = createLiElement(post, index);
            postsList.appendChild(li);
        })
    })
    .catch(error => console.log(error));
}

const createLiElement = (post,index) => {
    let li = document.createElement('li');
    li.className = 'list-group-item';
    li.innerHTML = `(${index+1}). ${post.title}.`;
    return li;
}