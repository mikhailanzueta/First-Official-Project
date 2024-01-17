const container = document.querySelector(".container");
const form = document.getElementById("form");
const pwShowHide = document.querySelectorAll(".showHidePw");
const pwFields = document.querySelectorAll(".password");
const signUp = document.querySelector(".signup-link");
const login = document.querySelector(".login-text");
const email = document.getElementById("email");
const username = document.getElementById("Username");
const userField = document.getElementById('Username-field');
const password = document.getElementById("password-field");
const password2 = document.getElementById("password-field2");
const emailErrorMessage = document.getElementById("emailErrorMessage");
const errorMessage = document.getElementById("errorMessage");
const passMessage = document.getElementById('passErrorMessage');

// JS CODE TO CHECK USERNAME VALIDATION.
function uValidation() {
    const usernameValue = username.value;

    if(usernameValue.includes(' ')) {
        //show error
        errorMessage.textContent = 'Username cannot be blank';
        return false;
    } else {
        errorMessage.textContent = '';
        return true;
    };
};

// JS CODE TO CHECK EMAIL VALIDATION.
function eValidation() {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const emailValue = email.value;

    if (emailValue === '') {
        emailErrorMessage.textContent = '';
        return true;
    } else if (!emailRegex.test(emailValue)){
        emailErrorMessage.textContent = 'Invalid email address';
        return false;
    } else {
        emailErrorMessage.textContent = '';
        return true;
    }
};

// JS CODE TO CHECK PASSWORD VALIDATION.
function pValidation() {
    const passRegex = /^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=_!]).{8,}$/;

   if (!passRegex.test(password.value) || !passRegex.test(password2.value)) {
    passMessage.textContent = 'Invalid password';
   } else if (password2.value != password.value) {
    passMessage.textContent = 'Passwords do not match';
   } else {
    return password.value && password2.value;
   }
}

username.addEventListener('input', uValidation);
email.addEventListener('input', eValidation);
password.addEventListener('input', function() {
    passMessage.textContent = '';
});
password2.addEventListener('input', function() {
    passMessage.textContent = '';
});

// JS CODE TO CALL AND EXECUTE USERNAME, EMAIL, AND PASSWORD FUNCTIONS ON SUBMISSION. IF THEY ARE NOT TRUE, PREVENT FORM SUBMISSION.
form.addEventListener('submit', (e) => {
    if (!uValidation() || !eValidation() || !pValidation()) {
        e.preventDefault();
    }
});


    // JS code to show/hide the password and change the icon
    pwShowHide.forEach(eyeIcon => {
        eyeIcon.addEventListener("click", ()=> {
            pwFields.forEach(pwField => {
                if(pwField.type === "password") {
                    pwField.type = "text";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye-slash", "uil-eye");
                    })
                }else {
                    pwField.type = "password";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye", "uil-eye-slash");
                    })
                }
            })
        })
    })




    // JS CODE TO SCROLL TO SECTIONS OF THE WEBPAGE
    document.addEventListener('DOMContentLoaded', function () {
        // Select all links with href starting with '#'
        const links = document.querySelectorAll('a[href^="#"]');
    
        links.forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault();
    
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
    
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop,
                        behavior: 'smooth' // for smooth scrolling
                    });
                }
            });
        });
    });
    






 

    // JS code to display login and signup form
    signUp.addEventListener("click", ()=> {
        container.classList.add("active");
    });
    login.addEventListener("click", ()=> {
        container.classList.remove("active");
    });