let passwordData = {
    "newPassword" : "",
    "confirmPassword" : ""
};

let newPasswordEl = document.getElementById("newPassword");
let confirmPasswordEl = document.getElementById("confirmPassword");
let newPasswordErrMsg = document.getElementById("newPasswordErrMsg");
let confirmPasswordErrMsg = document.getElementById("confirmPasswordErrMsg");
let updatePasswordForm = document.getElementById("updatePasswordForm");
let updateBtn = document.getElementById("updateBtn");

newPasswordEl.addEventListener("blur" , function(event){
    if(event.target.value === ""){
        newPasswordErrMsg.textContent = "Required*";
    }
    else{
        newPasswordErrMsg.textContent = "";
    }
    passwordData.newPassword = event.target.value;
});

confirmPasswordEl.addEventListener("blur" , function(event){
    if(event.target.value === ""){
        confirmPasswordErrMsg.textContent = "Passwords must be same";
    }
    else{
        confirmPasswordErrMsg.textContent = "";
    }
    passwordData.newPassword = event.target.value;
});

updatePasswordForm.addEventListener("submit", function(event){
    event.preventDefault();
});

updateBtn.addEventListener("click", function(){
    if(confirmPasswordEl.value === ""){
        confirmPasswordErrMsg.textContent = "Passwords must be same";
    }
    else{
        confirmPasswordErrMsg.textContent = "";
    }
    
    if(newPasswordEl.value === ""){
        newPasswordErrMsg.textContent = "Required*";
    }
    else{
        newPasswordErrMsg.textContent = "";
    }

    passwordData.newPassword = newPasswordEl.value;
    passwordData.confirmPassword = confirmPasswordEl.value;
    
    newPasswordEl.value = "";
    confirmPasswordEl.value = "";
});

console.log(passwordData);