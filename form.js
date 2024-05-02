var nameErrorMsg = document.getElementById('name-error');
var phoneErrorMsg = document.getElementById('phone-error');
var emailErrorMsg = document.getElementById('email-error');
var messageErrorMsg = document.getElementById('message-error');
var submitErrorMsg = document.getElementById('submit-error');


function validateName(){
    var name = document.getElementById("fName").value;
    if (name.length == 0){
        nameErrorMsg.innerHTML = 'name is required';
        return false;
    }
    if (!name.match(/^[A-Za-z]+\s{1}[A-Za-z]+$/)){
        nameErrorMsg.innerHTML = 'Write full name';
        return false;
    }
    nameErrorMsg.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
    return true;
}

function validatePhone(){
    var phone = document.getElementById('phone').value;

    if(phone.length == 0){
        phoneErrorMsg.innerHTML = 'phone no is required';
        return false;
    }
    if (phone.length !== 11){
        phoneErrorMsg.innerHTML ='11 digit format';
        return false;
    }
    if (!phone.match(/^[0-9]{11}$/)) {
        phoneErrorMsg.innerHTML = 'phone no is required';
        return false;
    }
    phoneErrorMsg.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
    return true;
}

function validateEmail(){
    var email = document.getElementById('email').value;

    if (email.length == 0){
        emailErrorMsg.innerHTML = 'email is required';
        return false;
    }
    if (!email.match(/^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm)){
        emailErrorMsg.innerHTML = 'invalid mail'
        return false;
    }
    emailErrorMsg.innerHTML = '<i class="fa-regular fa-circle-check"></i>'
    return true;
}
validateMessage = () => {
    var message = document.getElementById('message').value;
    let count;
    count = 30 - message.length;

    if(message.length == 0){
        messageErrorMsg.innerHTML = 'message is required'
        return false;
    }
    if (count >= 1) {
        messageErrorMsg.innerHTML = count + ' more character'
        return false;
    }
    messageErrorMsg.innerHTML = '<i class="fa-regular fa-circle-check"></i>'
    return true;
}

function submitValidation(){
    if (!validateName() || !validatePhone() || !validateEmail() || !validateMessage()){
        submitErrorMsg.style.display = 'block';
        submitErrorMsg.innerHTML = 'please fix errors to submit';
        setTimeout(() => {
            submitErrorMsg.style.display = 'none';
        }, 3000);
        return false;
    }
}