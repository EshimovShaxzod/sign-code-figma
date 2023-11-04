
var elPasswordInput = document.querySelector('.form-input__password');
var elEyeIcon = document.querySelector('.form-password__img');

elEyeIcon.addEventListener('click', () => {

    if(elPasswordInput.type === 'password'){
        elPasswordInput.type = 'text'
        elEyeIcon.src = '../images/eye-logo.svg'        
    }else{
        elPasswordInput.type = 'password'
        elEyeIcon.src = '../images/hidden-eye.png'
    }
})