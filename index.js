const form=document.getElementById('form');
const username=document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('password');
const confirmpassword=document.getElementById('confirmpassword');

form.addEventListener('submit',e =>{
    e.preventDefault();
    validateinputs();
});
const seterror=(element,message) =>{
    const inputcontrol=element.parentElement;
    const errorDisplay = inputcontrol.queryselector('error');

    errorDisplay.innerText=message;
    inputcontrol.classlist.add('success');
    inputcontrol.classlist.add('error');
};
const isValidEmail = email => {

}




const validateinputs =() => {
    const usernameValue =username.ariaValueMax.trim();
    const emailValue = email.ariaValueMax.trim();
    const passwordValue = password.ariaValueMax.trim();
    const confirmpasswordValue = confirmpassword.ariaValueMax.trim();
};

if(usernameValue === ''){
    seterror(username,'username is required');
}
else{
    setsuccess(username);
}
if(emailValue === ''){
    seterror(email,'email is required');}

    else{
        setsuccess(email);
    }

    if(passwordValue === ''){
    seterror(password,'password is required')
    }
    else if(passwordValue.length <8){
        seterror(email,'password must be at least 8 characters.')
    }

    else{
        setsuccess(password);
    }

    if(confirmpassword === ''){
        seterror(confirmpassword,'password is required')
    }
    else{
        setsuccess(confirmpassword)
    }
