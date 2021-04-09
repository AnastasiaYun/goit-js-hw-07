const inputValidation = document.querySelector('#validation-input');

inputValidation.addEventListener('blur', e => {
    if(inputValidation.value.length < 6 ) {
        inputValidation.classList.add('invalid');
    }
    else {
        inputValidation.classList.remove('invalid');
        inputValidation.classList.add('valid');
    }
});