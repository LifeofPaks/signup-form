const firstNameInput = document.querySelector('.first-name-input')
const lastNameInput = document.querySelector('.last-name-input')
const emailInput  = document.querySelector('.email-input ')
const passwordInput = document.querySelector('.password-input')
const firstNameBox = document.querySelector('.first-name-box')
const lastNameBox = document.querySelector('.last-name-box')
const emailBox = document.querySelector('.email-box')
const passwordBox = document.querySelector('.password-box')
const firstNanmeErrorMessage = document.querySelector('.FN-error-message')
const lastNameErrorMessage = document.querySelector('.LN-error-message')
const emailErrorMessage = document.querySelector('.EM-error-message')
const passwordErrorMessage = document.querySelector('.PW-error-message')
const firstNameErrorIcon = document.querySelector('.FN-error-icon')
const lastNameErrorIcon = document.querySelector('.LN-error-icon')
const emailErrorIcon = document.querySelector('.EM-error-icon')
const passwordErrorIcon = document.querySelector('.PW-error-icon')
const btn = document.querySelector('.btn')


validateInput()

function validateInput(){

    firstNameInput.addEventListener('input', ()=>{
        if(firstNameInput.value === ""){
            firstNameBox.classList.add('error')
            firstNameInput.classList.add('text-error')
            firstNanmeErrorMessage.innerHTML = `First Name cannot be empty`
            firstNameErrorIcon.classList.add('active')
        } else{
            firstNameBox.classList.remove('error')
            firstNameInput.classList.remove('text-error')
            firstNanmeErrorMessage.innerHTML = ``
            firstNameErrorIcon.classList.remove('active')
        }
    })
    
    lastNameInput.addEventListener('input', ()=>{
        if(lastNameInput.value === ""){
            lastNameBox.classList.add('error')
            lastNameInput.classList.add('text-error')
            lastNameErrorMessage.innerHTML = `Last Name cannot be empty`
            lastNameErrorIcon.classList.add('active')
        } else{
            lastNameBox.classList.remove('error')
            lastNameInput.classList.remove('text-error')
            lastNameErrorMessage.innerHTML = ``
            lastNameErrorIcon.classList.remove('active')
        }
    })
    
    emailInput.addEventListener('input', ()=>{
        if(emailInput.value === ""){
            emailBox.classList.add('error')
            emailInput.classList.add('text-error')
            emailErrorMessage.innerHTML = `Looks like this is not an email`
            emailErrorIcon.classList.add('active')
        } 
        else if (emailInput.value != "" &&
        emailInput.value.match(
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        )){
            emailBox.classList.remove('error')
            emailInput.classList.remove('text-error')
            emailErrorMessage.innerHTML = ``
            emailErrorIcon.classList.remove('active')
        }
    })
    
    passwordInput.addEventListener('input', ()=>{
        if(passwordInput.value === ""){
            passwordBox.classList.add('error')
            passwordInput.classList.add('text-error')
            passwordErrorMessage.innerHTML = `Password cannot be empty`
            passwordErrorIcon.classList.add('active')
        } else{
            passwordBox.classList.remove('error')
            passwordInput.classList.remove('text-error')
            passwordErrorMessage.innerHTML = ``
            passwordErrorIcon.classList.remove('active')
        }
    })

}
