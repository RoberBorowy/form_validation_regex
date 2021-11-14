const username = document.querySelector('.username');
const password = document.querySelector('.password');
const password2 = document.querySelector('.password2');
const email = document.querySelector('.email');
const submit = document.querySelector('.submit');
const clear = document.querySelector('.clear');
const form = document.querySelector('.form');
const small = document.querySelector('.small');
const small2 = document.querySelector('.small2');
const passwordRegex = /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/;



submit.addEventListener('click', (e) => {
    e.preventDefault();


    userName();
    userPassword();
    checkPassword();
    emailCheck();


})

clear.addEventListener('click', (e) => {
    e.preventDefault();

    clearBtn();
})



const userName = () => {
    const nameRegex = /^[a-zA-Z\-]+$/;
    if (username.value !== "" && username.value.match(nameRegex)) {
        username.parentElement.classList.add('accept');

    } else {

        username.parentElement.classList.add('error');

    }

}

const userPassword = () => {
    
    if (password.value !== "" && password.value.match(passwordRegex)) {
        password.parentElement.classList.add('accept');

    } else {

        password.parentElement.classList.add('error');
        small.style.visibility = 'visible';

    }

}

const checkPassword = () => {
    if (password2.value !== '' && password2.value == password.value && password2.value.match(passwordRegex)) {
        password2.parentElement.classList.add('accept');
    } else {
        password2.parentElement.classList.add('error');
        small2.style.visibility = 'visible';

    }
}

const emailCheck = () => {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.value !== "" && email.value.match(emailRegex)) {
        email.parentElement.classList.add('accept');

    } else {

        email.parentElement.classList.add('error');


    }

}

const clearBtn = () => {
    username.value = '';
    password.value = '';
    password2.value = '';
    email.value = '';
    username.parentElement.classList.remove('accept');
    username.parentElement.classList.remove('error');
    password.parentElement.classList.remove('accept');
    password.parentElement.classList.remove('error');
    small.style.visibility = 'hidden';
    password2.parentElement.classList.remove('accept');
    password2.parentElement.classList.remove('error');
    small2.style.visibility= 'hidden';
    email.parentElement.classList.remove('accept');
    email.parentElement.classList.remove('error');

}