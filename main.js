let inputs = document.querySelectorAll('input');

// nly inputs that have been 'clicked' will show error messages
inputs.forEach(input => input.addEventListener('focusout', e => {
    e.target.classList.add('clicked');
}))

let pass = document.querySelector('#pass');
let passConfirm = document.querySelector('#pass-confirm');
let passConfirmErr = document.querySelector('#pass-confirm + span');

let passFields = [pass, passConfirm]
passFields.forEach(field => field.addEventListener('keyup', () => {
    const check = passwordsMatch();
    if (!check){
        passConfirmErr.textContent = '* Passwords do not match'
    }
    else{
        passConfirmErr.textContent = '';
    }
}));

function passwordsMatch(){
    return (pass.value === passConfirm.value);
}