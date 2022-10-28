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















