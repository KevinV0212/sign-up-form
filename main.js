let inputs = document.querySelectorAll('input');
console.log(inputs)

inputs.forEach(input => input.addEventListener('focusout', e => {
    e.target.classList.add('clicked');
}))