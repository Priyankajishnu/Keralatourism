function valid(){
    let phone=document.getElementById("phone");
    let email=document.getElementById("email");
    let psw=document.getElementById("psw");
    let pswrepeat=document.getElementById("pswrepeat");
    if(phone.value.trim()==""||email.value.trim()==""||psw.value.trim()==""||pswrepeat.value.trim()==""){
        alert("space should not accepted ");
        return false;  
    }
    else{
       return true; 
      }
}



//   function valid1(){
//     let phone=document.getElementById("phone");
//     let error2=document.getElementById("numerror");
//       let regex=/^\(?([0-9]{3})\)?[.- ]?([0-9]{3})[.- ]?([0-9]{4})$/;
//       if(regex.test(phone.value)){
//                error2.innerHTML="valid";
//                error2.style.color="green";
//                return true;
//     }
//    else{
//        error2.innerHTML="Enter a Valid Mobile Number";
//         error2.style.color="brown";
//         return false;
//     }
//  }


 function mail(){
    let email=document.getElementById("email");
    let error3=document.getElementById("emailerror");
     let regexp=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    if (regexp.test(email.value)){
        error3.innerHTML="";
        return true;
    }
    else {
        error3.innerHTML="Invalid Email";
        error3.style.color="brown";
        return false;
    }
       
        
}




    
function validate1(){
    let psw=document.getElementById("psw");
    let error4=document.getElementById("passerror");
    let regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
 if(regularExpression.test(psw.value)){
        error4.innerHTML="";
        return true;
        }
else{
    error4.innerHTML="Password should contain Minimum 8 characters,Atleast one Uppercase, one Lowercase, one number and a special character";
    error4.style.color="brown";
    return false;
}
}
function repeatpassword(){
    let pswrepeat=document.getElementById("pswrepeat");
    let error5=document.getElementById("reperror");
    let regularExpression1 = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    if(regularExpression1.test(pswrepeat.value)){
        return true;
        }
else{
    error5.innerHTML="Password should contain [1] Minimum 8 characters [2] Atleast one Uppercase [3] Atleast one Lowercase [4] Atleast one number [5] Atleast one special character";
    error5.style.color="brown";
    return false;
}
}


