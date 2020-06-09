var input1 = document.getElementById("input1");
var input2 =  document.getElementById("input2");
var err1 = document.getElementById("err1");
var err2 = document.getElementById("err2");

function validate(){
    
   window.location.href="todolist.html";
   return true;
}
// username validation
function validate1(callback){
    if(input1.value===""){
         err1.innerHTML="field should not be empty";
         err1.style.color="red";
        return false;
    }
    else if(input1.value==="admin"){
        err1.innerHTML="";
    }else if(input1.value!="admin"){
        err1.innerHTML="Incorrect username";
        err1.style.color="red";
        return false;
    }
    //password validation
    if(input2.value===""){
        err2.innerHTML="field should not be empty";
        err2.style.color="red";
       return false;
   }
    if(input2.value==="12345"){
        err2.innerHTML="";
       
    }else{
        err2.innerHTML="Incorrect password";
        err2.style.color="red";
        return false;
    }
   callback();

}

