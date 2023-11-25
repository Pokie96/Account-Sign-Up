import "./style.css";

//Input elements:
const emailInput = document.getElementById("email");
const countryInput = document.getElementById("country");
const zipCodeInput = document.getElementById("zip-code");
const passwordInput = document.getElementById("password");
const passwordCInput = document.getElementById("password-c");

//Input error messages:
const emailError = document.getElementById("email-val-text");
const countryError = document.getElementById("country-val-text");
const zipCodeError = document.getElementById("zip-code-val-text");
const passwordError = document.getElementById("password-val-text");
const passwordCError = document.getElementById("password-c-val-text");

//Regex Expressions:
const countryRegex = /^([^0-9]*)$/;

//Email input event listener:
emailInput.addEventListener("input", () => {
    emailInput.setCustomValidity("");
    if(!emailInput.checkValidity()){
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

    if(!isValid){
        countryError.textContent = "Country names can only contain alphabetic characters!";
        countryInput.className = "invalid";
    } else if(countryInput.value.length < 1){
        countryError.textContent = "Field is required!";
        countryInput.className = "invalid";
    }else{
        countryError.textContent = "";
        countryInput.className = "valid";
    }
})
