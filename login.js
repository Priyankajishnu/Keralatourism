let email=document.getElementById("email");
let error1=document.getElementById("error1");
let pwd=document.getElementById("pwd");
let error2=document.getElementById("error2");
function valid(){
    if(email.value.trim()==""||pwd.value.trim()==""){
        alert("space should not accepted ");
        return false;
    }
    else{
      return true;
      
    }
}
function validate(){
    let regexp=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    if (regexp.test(email.value)){
        error1.innerHTML="";
        return true;
    }
    else {
        
        error1.innerHTML="Invalid Email";
        error1.style.color="brown";
        return false;
    }
}
function validate1(){
    let regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    if(regularExpression.test(pwd.value)){
        return true;
        }
else{
    error2.innerHTML="Password should contain Minimum 8 characters,Atleast one Uppercase, one Lowercase, one number and a special character";
    error2.style.color="brown";
    return false;
}

}

   
    


