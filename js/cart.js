const URL_PRODUCTO = 'https://japceibal.github.io/emercado-api/user_cart/25801.json';
let nombreProduc = document.getElementById('nombreProducto');
let imgProduc = document.getElementById('imgProduc');
let costoProduc = document.getElementById('costoProduc')
const TABLECART = document.getElementById('tabla-body');


fetch(URL_PRODUCTO)
.then(respuesta => respuesta.json())
.then(datos =>{
    let htmlcart ='';
    for(let producto of datos.articles){
        htmlcart +=`
                <tr>
                    <td id="imgProduc"><img src="${producto.image}" class="img-thumbnail col-7" "></th>
                    <td id="nombreProducto">${producto.name}</th>
                    <td id="costoProducto">${producto.currency + " " + producto.unitCost}</th>
                    <td><input id="input" style="width:50px" value ="${producto.count}" min="1" type = "number" onclick ="calcular(this.value)"></th>
                    <td><strong><p id="subtotal">USD ${producto.unitCost}</p></strong></td>
                 
                </tr>
                
        `
		
    
	
    TABLECART.innerHTML = htmlcart;
	}

    
	

})


function calcular(unidades){
    fetch(URL_PRODUCTO)
    .then(respuesta => respuesta.json())
	.then(datos =>{
		for(let producto of datos.articles){
			var v = producto.unitCost*unidades;
			v = producto.currency + " " + v
			document.getElementById("subtotal").innerHTML = v;
		}
	})
    
				
}

let subTotal = document.getElementById("subtotal");


document.getElementById('tipodeEnvio').addEventListener("change", function(e){
    const id = e.target.id

    if(id === 'Enviopremium'){

    }
})


let subtotalCart = document.getElementById('subtotalCart');
let costodeenvio = document.getElementById('shipping');
let totalUSD = document.getElementById('totalCart');



function tipodeenvio (){
    if (document.getElementById('Enviopremium').checked){
        costodeenvio = subTotal*0.15
    }
    else if (document.getElementById("Envioexpress").checked) {
        costodeenvio= subTotal*0.07 
    }
    else if ( document.getElementById('Enviostandar').checked) {
        costodeenvio = subTotal*0.05
    }

    document.getElementById('CostosEnvio').innerHTML = ``
}

// document.getElementById("productCost").innerHTML =`${currencyProducto} ${subtotal}`
        
//         if (document.getElementById("flexRadioDefault1").checked) {
//             costoEnvio= subtotal*0.15
//         } 
//         else if (document.getElementById("flexRadioDefault2").checked) {
//             costoEnvio= subtotal*0.07
//         } 
//         else if (document.getElementById("flexRadioDefault3").checked) {
//             costoEnvio= subtotal*0.05
//         }
        
//         document.getElementById("deliverCost").innerHTML =`${currencyProducto} ${Math.round(costoEnvio)}`
              

//     });

// //Escucha modificación del tipo de envío seleccionado

//     document.getElementById("deliverType").addEventListener("change", function(event){
   
//     const id = event.target.id
      

//     if (id === 'flexRadioDefault1') {
       
//         costoEnvio = subtotal*0.15
       
//     }
    
//     else if (id === 'flexRadioDefault2'){
//         costoEnvio = subtotal*0.07
//     }

//     else {
//        costoEnvio = subtotal*0.05
//     }    
    

//     document.getElementById("deliverCost").innerHTML =`${currencyProducto} ${Math.round(costoEnvio)}`


// });
