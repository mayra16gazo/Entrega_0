function ingreso(){
    let username = document.getElementById("usuario").value;
    let password = document.getElementById("contraseña").value;

    if(username != "" && password != ""){
        sessionStorage.setItem("username", username);
         location.href="index.html";
    }
    else{
        alert("Faltan completar usuario y/o contraseña");
    }
}

    document.addEventListener("DOMContentLoaded", function(){
        document.getElementById("button").addEventListener("click", function(){
            ingreso()
        });
});








