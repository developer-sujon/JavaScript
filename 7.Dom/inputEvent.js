/**
 * Inpt Event Dom Element
 */

 const name = document.getElementById('name');
 let showName = document.getElementById('showName');
 const skills = document.getElementsByName('skills');
 const selectedSkills = document.getElementById('selectedSkills');
 const skillsList = [];
 
 name.addEventListener('keypress', function(e) {
     if (e.key == 'Enter') {
         showName.innerHTML = e.target.value;
         e.target.value = '';
     }
 })
 
 
 Array.from(skills).forEach(function(skill) {
     skill.addEventListener('change', function(e) {
         if (e.target.checked) {
             skillsList.push(e.target.value);
             console.log(skillsList);
         }else{
             let index = skillsList.indexOf(e.target.value)
             skillsList.splice(index, 1)
             console.log(skillsList);
         }
     })  
 })

 const lists = document.getElementById('ulContainer');
 const button = document.getElementById('button');

 button.addEventListener('click',function() {
    let newList = lists.lastElementChild.cloneNode(true);
    lists.appendChild(newList);
 })

 lists.addEventListener('dblclick', function(event) {
    if (this.contains(event.target)) {
        let tempInput = event.target.innerHTML
        event.target.innerHTML = '';
        let input = createInputBox(tempInput);
        event.target.appendChild(input);
        input.addEventListener('keypress', function(e) {
            if (e.keyCode === 13) {
                if (confirm("Are you sure you want to change this value?")) {
                    event.target.innerHTML = e.target.value;
                }
            }
        })
    }
 })

 const createInputBox = (value) => {
    let input = document.createElement('input');
    input.type = 'text';
    input.className = 'form-control';
    input.value = value;

    return input;
 }