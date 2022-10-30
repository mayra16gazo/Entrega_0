const URL_PRODUCTO = 'https://japceibal.github.io/emercado-api/user_cart/25801.json';
const TABLECART = document.getElementById('tabla-body');
let carrito = [];


function vercarrito(articles){
    let htmlcart = "";
    for(let producto of articles){
        htmlcart +=`
            <tr>
                <td id="imgProduc"><img src="${producto.image}" class="img-thumbnail col-7" "></th>
                <td id="nombreProducto">${producto.name}</th>
                <td id="costoProducto">${producto.currency + " " + producto.unitCost}</th>
                <td><input id="input" style="width:50px" value ="${producto.count}" min="1" type = "number" onclick ="calcular(this.value)"></th>
                <td id=subtotaal><strong><p id="subtotal">USD ${producto.unitCost}</p></strong></td>
                <td><button type="button" class="btn btn-danger" id="eliminar">Eliminar</button></td>
                         
            </tr>`
                
            
            
             TABLECART.innerHTML = htmlcart;
        }

}

function calcular(unidades){
    for(let producto of carrito){
    currency = producto.currency;
    variante = producto.unitCost*unidades;
    v = producto.currency + " " + variante
    document.getElementById("subtotal").innerHTML = v;
    }
    costosfinales()
    
}



// ENTREGA 6


function eliminar(){
    let btneliminar = document.getElementById('eliminar');
    btneliminar.addEventListener('click', function(){
        console.log(carrito);
    })

}


function costosfinales(){
    let valordeEnvio = variante * p
    document.getElementById('subtotalCart').innerHTML =  currency + " " + variante;
    document.getElementById('costoenvio').innerHTML = currency + " " +  valordeEnvio ;
    let suma = variante + valordeEnvio ;
    document.getElementById('totalCart').innerHTML = currency + " " +  suma ;
}





document.addEventListener("DOMContentLoaded", function(){
    getJSONData(URL_PRODUCTO).then(function(resultObj){
        if(resultObj.status === "ok"){
            carrito = resultObj.data.articles;
            vercarrito(carrito);
            costosfinales();
        }
    })
});


document.getElementById('Enviopremium').addEventListener("change", function(){
    p = 0.15;
    costosfinales()
});

document.getElementById('Envioexpress').addEventListener("change", function(){
    p = 0.07;
    costosfinales()
});

document.getElementById('Enviostandar').addEventListener("change", function(){
    p = 0.05;
    costosfinales()
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
  
  

  function metodopago(tarjeta, banco){
    document.getElementById('Numerotarjeta').disabled = tarjeta;
    document.getElementById('codseg').disabled = tarjeta;
    document.getElementById('vto').disabled = tarjeta;
    document.getElementById('Numerocuenta').disabled = banco;
    
    checked = true;
    
  }

  document.getElementById('tarjeta').addEventListener('change', function(){
    metodopago(false, true);
    checked = true;
  })

  document.getElementById('tranf').addEventListener('change', function(){
    metodopago(true, false);
    checked = true;
  })


function validarpago(){
    let check1 = document.getElementById('tarjeta');
    let check2 = document.getElementById('tranf');
    let feedback = document.getElementById('Noselecciono')
    let btnpago = document.getElementById('boton-pago');
    if(!check1.checked && !check2.checked){

        btnpago.classList.add('text-danger');
        feedback.classList.remove('d-none');
        feedback.classList.add('d-inline');
    }
    
}



//Falta que este seleccionado uno de los radios de los envios.
// Falta que diga que no se a seleccionado un metodo de pago
//Cartel de compra con exito!
