function greeting (greet, name) {
    function firstName() {
        if (name) {
            return name.split(' ')[0]
        }else{
            return ''
        }
    }

    const message = greet + ' ' + firstName()
    console.log(message);
}

greeting('Good Night', 'Mohammad Sujon')