const form = document.querySelector('.login-form');
// const button = form.querySelector('button');
const input = form.querySelector('input');


form.addEventListener('submit', getData);

function getData(evt) {
    evt.preventDefault();
    const { email, password, } = evt.currentTarget.elements;
    if ((email.value.length && password.value.length) < 1) {
        alert('Всі поля повинні бути заповнені!')
    } else {
        const data = {
            email: email.value,
            password: password.value
        }
        console.log(data);
        evt.currentTarget.reset();
    }
}