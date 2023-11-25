import "./style.css";

//Input elements:
const emailInput = document.getElementById("email");
const countryInput = document.getElementById("country");
const zipCodeInput = document.getElementById("zip-code");
const passwordInput = document.getElementById("password");
const passwordCInput = document.getElementById("password-c");
const submitButton = document.getElementById("submit-button");
const allInputs = document.querySelectorAll('input');

//Input error messages:
const emailError = document.getElementById("email-val-text");
const countryError = document.getElementById("country-val-text");
const zipCodeError = document.getElementById("zip-code-val-text");
const passwordError = document.getElementById("password-val-text");
const passwordCError = document.getElementById("password-c-val-text");
const buttonError = document.getElementById("button-error");

//Regex Expressions:
const countryRegex = /^([^0-9]*)$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$/;
let zipCodeRegex;

//Window event listener:
window.addEventListener("load", () => {
    emailError.textContent = "Field is required!";
    emailInput.className = "invalid";

    countryError.textContent = "Field is required!";
    countryInput.className = "invalid";

    zipCodeError.textContent = "Field is required!";
    zipCodeInput.className = "invalid";

    passwordError.textContent = "Field is required";
    passwordInput.className = "invalid";

    passwordCError.textContent = "Field is required";
    passwordCInput.className = "invalid";
});

//Email input event listener:
emailInput.addEventListener("input", () => {
    emailInput.setCustomValidity("");
    if(emailInput.value.length === 0){
        emailError.textContent = "Field is required!";
        emailInput.className = "invalid";
    } else if(!emailInput.checkValidity()){
        emailError.textContent = "Please enter a valid email address!";
        emailInput.className = "invalid"
    } else{
        emailError.textContent = "";
        emailInput.className = "valid"
    }
});

//Country input event listener:
countryInput.addEventListener("input", () => {
    let isValid = countryRegex.test(countryInput.value)

    if(countryInput.value.length === 0){
        countryError.textContent = "Field is required!";
        countryInput.className = "invalid";
    } else if(!isValid){
        countryError.textContent = "Country names can only contain alphabetic characters!";
        countryInput.className = "invalid";
    }else{
        countryError.textContent = "";
        countryInput.className = "valid";
    }
});

//Zip Code Input event listener:
zipCodeInput.addEventListener("input", () => {
    let isValid = isValidZipCode(zipCodeInput.value, countryInput.value);

    if(zipCodeInput.value.length === 0){
        zipCodeError.textContent = "Field is required!";
        zipCodeInput.className = "invalid";
    } else if(!isValid){
        zipCodeError.textContent = "The zip code is not valid!";
        zipCodeInput.className = "invalid";
    } else{
        zipCodeError.textContent = "";
        zipCodeInput.className = "valid";
    }
});

//Password input event listener:
passwordInput.addEventListener("input", () => {
    let isValid = passwordRegex.test(passwordInput.value);
    if(passwordInput.value.length === 0){
        passwordError.textContent = "Field is required";
        passwordInput.className = "invalid";
    } else if(!isValid){
        passwordError.textContent = "Password must be at least 8 characters; and contain an uppercase, lowercase and special character";
        passwordInput.className = "invalid";
    } else{
        passwordError.textContent = "";
        passwordInput.className = "valid";
    }
});

//Password confirmation input event listener:
passwordCInput.addEventListener('input', () => {
    let isValid = checkPasswordsMatch(passwordInput.value, passwordCInput.value);

    if(passwordCInput.value.length === 0){
        passwordCError.textContent = "Field is required";
        passwordCInput.className = "invalid";
    } else if(!isValid){
        passwordCError.textContent = "Password confirmation must match the password!";
        passwordCInput.className = "invalid";
    } else{
        passwordCError.textContent = "";
        passwordCInput.className = "valid";
    }
});


submitButton.addEventListener('click', (e) => {
    if(!checkInvalidInputs(allInputs)){
        e.preventDefault();
        buttonError.textContent = "All required fields must be completed!"
    } else{
        buttonError.textContent = "";
    }
});

//Function which tests if a valid zip code has been provided:
function isValidZipCode(zipCodeInput, country){
    if(country.toLowerCase() === "united states"){
        zipCodeRegex = /^([0-9]{5})(?:[-\s]*([0-9]{4}))?$/;
    } else{
        zipCodeRegex = /^[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}$/i;
    }
    return zipCodeRegex.test(zipCodeInput);
};

//Function checks whether two passwords match:
function checkPasswordsMatch(password, passwordC){
    if(password === passwordC){
        return true;
    }
    return false;
};


function checkInvalidInputs(inputs){
    for(let i = 0; i < inputs.length; i++){
        if(inputs[i].classList.contains("invalid")){
            return false;
        }
    }
    return true;
};

