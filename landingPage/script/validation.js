
// Sign in Page

let user_name = document.querySelector('.user_name');
let input_text = document.querySelectorAll('input[type="text"]');

let password = document.querySelector('.password_box');
let password_login = document.querySelector('#password_login');

let email = document.querySelector('.email_box');
let email_login = document.querySelector('#email_login');
let forget_email = document.querySelector('#forget_email');
let email_profile = document.querySelector('#email_profile');

let error = document.querySelector('.error');
let error_login = document.querySelector('.error_login');
let error_forget = document.querySelector('.error_forget');
let error_profile = document.querySelector('.error_profile');

let form = document.querySelector('.sign_up_form');
let login_in_form = document.querySelector('.login_in_form');
let forget_form = document.querySelector('.forget_password_form');
let save_profile_form = document.querySelector('.save_profile_form');
let message = []




function checkName(e) {
    if (e.value == null || e.value == "") {
        message.push("Name is required");
        e.style.border = "2px solid red " 
    }
    else {
        e.style.border = "none" 
    }
}

function checkPassword(e) { 
    if (e.value.length < 8) {
        message.push("Password must be at least 8 characters long");
        e.style.border = "2px solid red " 
    }
    if(e.value.length > 8) {
        e.style.border = "none" 
    }
}
function checkEmail(e) {
    if (e.value == "") {
        message.push("Enter a valid e-mail address");
        e.focus();
        e.style.border = "2px solid red " 

    }
    else if (e.value.indexOf("@", 0) < 0) {
        message.push("Enter a valid e-mail address");
        e.focus();
        e.style.border = "2px solid red " 

    }
    else if (e.value.indexOf(".", 0) < 0) {
        message.push("Enter a valid e-mail address");
        e.focus();
        e.style.border = "2px solid red " 

    }
}


function checkSignUp(){


form.addEventListener('submit', (e) => {

    message = []
    checkName(user_name);
    checkEmail(email);
    checkPassword(password);
    if (message.length > 0) {
        e.preventDefault();
        error.innerHTML = message.join('<br>')
        error.style.color = "red";
        error.style.padding = "1rem";
    }
    setTimeout(() => {
        error.innerHTML = "";


    }, 1000)
})

}


function checkLogin(){
    login_in_form.addEventListener('submit', (e) => {
        message = []
        // checkName(user_name);
        checkEmail(email_login);
        checkPassword(password_login);
        if (message.length > 0) {
            e.preventDefault();
            error_login.innerHTML = message.join('<br>')
            error_login.style.color = "red";
            error_login.style.padding = "1rem";
        }
        setTimeout(() => {
            error_login.innerHTML = "";
          
    
    
        }, 1000)
    })
}

function forgetPassword(){
    forget_form.addEventListener('submit', (e) => {
        message = [];
        checkEmail(forget_email);
        if (message.length > 0) {
            e.preventDefault();
            error_forget.innerHTML = message.join('<br>')
            error_forget.style.color = "red";
            error_forget.style.padding = "1rem";
        }
        // if(message.length==0){
        //     window.location = "profile.html"
        // }
        setTimeout(() => {
            error_forget.innerHTML = "";
    
    
        }, 1000)
    })
}



function saveProfile(){
    // save_profile_form.addEventListener('submit', (el) => {
        input_text.forEach(Element=>{
            message = [];
            checkEmail(email_profile)
            checkName(Element);

          
           
           
       
        if (message.length > 0) {
            error_profile.style.display = "block";
           
    
            error_profile.innerHTML = message[0]
            error_profile.style.color = "red";
            error_profile.style.padding = "1rem";
            // error_profile.style. = "1rem";
           

        }
       
        setTimeout(() => {
            error_profile.innerHTML = "";
            error_profile.style.display = "none";
    
        }, 1000)
    })
       
    //   })
 
}