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

let variante = [];

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
            metodoenvio();
            
            
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




  
  let formuario1 = document.getElementById('formprincipal');
  let envioP = document.getElementById('Enviopremium');
  let envioE = document.getElementById('Envioexpress');
  let envioS = document.getElementById('Enviostandar');
  let btnfinalizar = document.getElementById('btnfinalizar');
  let inputcalle = document.getElementById('calle');
  let inputesquina = document.getElementById('esquina');
  let inputpuerta = document.getElementById('puerta');

  function validarformuario1(){
    btnfinalizar.addEventListener('click', function(e){
        seleccionarpago();
        if (!formuario1.checkValidity() || !formmodal()){
            e.preventDefault();
            
        } else{
            alert('Compra exitosa!')
        }
        formuario1.classList.add('was-validated');
        e.preventDefault();
    })
    
 
  }




let modal = document.getElementById('formpago');
let tarjeta = document.getElementById('tarjeta');
let numtarjeta = document.getElementById('Numerotarjeta');
let codseg = document.getElementById('codseg');
let vto = document.getElementById('vto');
let transferencia = document.getElementById('transferencia');
let numerocuenta = document.getElementById('Numerocuenta');


  function habilitarpago(){

    tarjeta.addEventListener('click', function(){
        numerocuenta.disabled = true;
        numtarjeta.disabled = false;
        codseg.disabled = false;
        vto.disabled = false;
    });

    transferencia.addEventListener('click', function(){
        numerocuenta.disabled = false;
        numtarjeta.disabled = true;
        codseg.disabled = true;
        vto.disabled = true;
    })


  }



  function seleccionarpago(){
    let feedback = document.getElementById('noseleccionopago')
    let btnpago = document.getElementById('boton-pago');
    if(!tarjeta.checked && !transferencia.checked){

        btnpago.classList.add('text-danger');
        feedback.classList.remove('d-none');
        feedback.classList.add('d-inline');
    } else {
        habilitarpago();
        
    }
}

document.addEventListener('DOMContentLoaded', function(){
    validarformuario1();
    habilitarpago();
    

 })



function formmodal(){
    if(!modal.checkValidity()){
        return false;

    }else{
        modal.classList.add('was-validated');
        return true;
    }
    
}


