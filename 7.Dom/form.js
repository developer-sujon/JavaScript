const form = document.getElementById('form');

form.addEventListener('submit', function(e){
    e.preventDefault();
    // console.log(this.elements[0]);
    // console.log(this.elements['email']);
    let result = {};
    let isValid = false;
    [...this].forEach(el => {
        if (el.type !== 'submit') {
            isValid = validation(el)
            if (isValid) {
                result[el.name] = el.value;
                el.classList.add('is-valid');
                el.nextElementSibling.textContent =`Your Value ${el.value}`;
                el.nextElementSibling.classList.add('text-success');
            }else{
                el.classList.add('is-invalid');
                el.nextElementSibling.textContent =`Please Input ${el.name} Value`;
                el.nextElementSibling.classList.add('text-danger');
            }
        }
    });
})

const validation = (el) => {
    if (!el.value) {
        return false;
    }
    return true;
}