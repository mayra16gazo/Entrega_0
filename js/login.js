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
        localStorage.setItem("username", username);  
         location.href="index.html";
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




// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()


