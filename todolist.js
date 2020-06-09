
    var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        if(this.readyState==4&&this.status==200){
            var response=JSON.parse(this.responseText);
       
            var output="";
        
          
            for(var i=0;i<response.length;i++){
                if(response[i].completed===false){
                output +="<div class='row'>" +"<input id='check' type ='checkbox'>"+ response[i].title+"</div>"+ "<br>";
                } 
            if(response[i].completed===true){
output +=  "<div class='row'>" +"<input type ='checkbox'  checked='checked' disabled='disabled'>"+ response[i].title+"</div>"+ "<br>";
        response[i].completed?'checked disabled':'';
            }  
                   
    } 
    document.getElementById("demo").innerHTML= output;
       
           
        } 
    
       
    }

xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
xhttp.send();

var check =document.getElementsById("check").checked;
var promise= new Promise(function(resolve,reject){
    
    var m=0;
    if(check===true){
             m=m+1;
    }
             if(m===5){
                 resolve("congrats. 5 tasks completed");
             
    }
})
promise
.then(function(t){
    alert(t);
})
