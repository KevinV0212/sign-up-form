let inputs = document.querySelectorAll('input');

// nly inputs that have been 'clicked' will show error messages
inputs.forEach(input => input.addEventListener('focusout', e => {
    e.target.classList.add('clicked');
}))

let pass = document.querySelector('#pass');
let passConfirm = document.querySelector('#pass-confirm');
