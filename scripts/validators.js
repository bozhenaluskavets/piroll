const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const title = document.getElementById('title');
const comment = document.getElementById('comment');
const submit = document.getElementById('submit')

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('seccess');
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const titleValue = title.value.trim();
    const commentValue = comment.value.trim();

    if(usernameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(titleValue === '') {
        setError(title, 'Title is required');
    } else if (titleValue.length < 5) {
        setError(title, 'Title must be at least 5 character.');
    } else {
        setSuccess(title);
    }

    if(commentValue === '') {
        setError(comment, 'Comment is required');
    } else if (commentValue.length < 20) {
        setError(comment, 'Comment must be at least 20 character.');
    } else {
        setSuccess(comment);
    }
};



// function solution(str){
//     return str.split("").reverse().join("")
//  }
 
//  solution('world')