const nameInput = document.getElementById('name_input');
const emailInput = document.getElementById('email_input');
const loginInput = document.getElementById('login_input');
const passwordInput = document.getElementById('password_input');
const repeatInput = document.getElementById('repeat_input');
const validateButton = document.getElementById("validate");

function submit(){
    let nameValue = nameInput.value;
    if (nameValue.length === 0) {
        passwordInput.value = "";
        repeatInput.value = "";
        alert("Enter your name please");
        return;
    } else {
        // можно тут будет пусто? Ничего не сломается?
    };
    let emailValue = emailInput.value;
    if (emailValue.includes("@")) {
        //это я тоже хочу оставить пустым
    } else {
        passwordInput.value = "";
        repeatInput.value = "";
        alert("Enter a valid e-mail please");
        return;
    };
    let loginValue = loginInput.value;
    if (loginValue.length === 0) {
        passwordInput.value = "";
        repeatInput.value = "";
        alert("Enter your login please");
        return;

    } else {
        
    };
    let passwordValue = passwordInput.value;
    if (passwordValue.length === 0) {
        repeatInput.value = "";
        alert("Enter your password please");
        return;
    } else {   
    };
    let repeatValue = repeatInput.value;
    if (repeatValue.length === 0) {
        alert("Enter your password please");}
    // Вот сюда я тоже хотела вставить return, но от этого всё перестает работать, почему?
    else {
    
    };

    if (passwordValue === repeatValue){
        alert("Welcome!");
    }
    else {
        alert("Password mismatch");
    };
};

validateButton.addEventListener('click', submit);