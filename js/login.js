let form = document.getElementById('login'); 
form.addEventListener('submit', function(event){   
    event.preventDefault();
}); 

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}
function hideAlertError() {
    document.getElementById("alert-danger").classList.remove("show");
}
let btnerror = document.getElementById('btnerror');
btnerror.addEventListener('click', function(evento){
    hideAlertError();
});

function ingreso(){
    let username = document.getElementById("usuario").value; 
    let password = document.getElementById("contraseña").value; 


    if(username !== '' && password !== ''){    
        sessionStorage.setItem("username", username);  
         location.href="./index.html";
     }
     else{
         showAlertError();
         
      
     }
}

    
document.addEventListener("DOMContentLoaded", function(){        
    document.getElementById("button").addEventListener("click", function(){   
        ingreso();
    });


    
});


client_id:"367762747849-7ndvd0kdt9dq9annpfb79ds13smu1ict.apps.googleusercontent.com"






