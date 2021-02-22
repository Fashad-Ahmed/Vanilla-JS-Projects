const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const pass = document.getElementById('password');
const pass2 = document.getElementById('password2');

showError = (input, message) => {
    const formControl = input.parentElement;
    formControl.className = 'form-control-error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

showSuccess = (input) => {
    const formControl = input.parentElement;
    formControl.className = 'form-control-error';
}

checkEmail = (input) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())){
        showSuccess(input);
    }
    else{
        showError(input, 'Invalid Email');
    }
}

checkReqd = (inpArr) => {
    let reqd = false;
    inpArr.forEach((input) => {
        if (input.value.trim() === '') {
            showError(input, `${getfieldName(input)} is required`);
            reqd = true;
        }
        else {
            showSuccess(input)
        }
    })
}

getfieldName = (input) => {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

checkLength = (input, min, max) => {
    if(input.value.length < min){
        showError(input, `${getfieldName(input)} should be at least ${min} characters`);
    }
    else if(input.value.length > max){
        showError(input, `${getfieldName(input)} should be at most ${max} characters`);        
    }
    else{
        showSuccess(input);
    }
}

checkPassword = (inp1, inp2) => {
    if(inp1.value === inp2.value){
        showSuccess(inp2);
    }
    else{
        showError(inp2, 'passwords does not match')
    }
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    if(!checkReqd[username, email, password, password2]){
        checkLength(username, 5, 18);
        checkLength(username, 6, 28);
        checkEmail(email);
        checkPassword(password, password2);
    }
});