
    var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        if(this.readyState==4&&this.status==200){
            var response=JSON.parse(this.responseText);
       
            var output="";
        
          
            for(var i=0;i<response.length;i++){
        let load = response[i].completed===true?`<li class='disabled'>`:'<li>';
        output += load + `<input type='checkbox' class='check' ${response[i].completed?'checked':''}> ${response[i].title} </li> <br>`;
                   
    } 
    document.getElementById("demo").innerHTML= output;
       
           
        } 
    
       
    }

xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
xhttp.send();

let count=0;
$('#demo').on('click','.check',function(e){
    if($(this).prop('checked')===true){
        count++;
        $(this).parent().addClass('disabled');
      call();
    }
})

function call(){
new Promise(function(resolve,reject){
if(count===5){
    resolve("congrats. 5 tasks completed");
}else{
    reject("error");
}
}).then(function(t){
    alert(t);
})
.catch(function(y){
    alert(y);
})
}