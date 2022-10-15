const URL_PRODUCTO = 'https://japceibal.github.io/emercado-api/user_cart/25801.json';
let nombreProduc = document.getElementById('nombreProducto');
let imgProduc = document.getElementById('imgProduc');
let costoProduc = document.getElementById('costoProduc')
const TABLECART = document.getElementById('table');


fetch(URL_PRODUCTO)
.then(respuesta => respuesta.json())
.then(datos =>{
    let htmlcart ='';
    for(let producto of datos.articles){
        htmlcart +=`
        <table class="table">
                <tr>
                    <th id="imgProduc"></th>
                    <th id="nombreProducto">Nombre</th>
                    <th id="costoProducto">Costo</th>
                    <th><label for="cantProducto">Cantidad</label>
                    <th>Sub.total</th>
                </tr>
                <tr>
                    <td id="imgProduc"><img src="${producto.image}" class="img-thumbnail col-7" "></th>
                    <td id="nombreProducto">${producto.name}</th>
                    <td id="costoProducto">${producto.currency + " " + producto.unitCost}</th>
                    <td><input id="input" style="width:50px" value ="1" min="1" type = "number" onclick ="calcular(this.value)"></th>
                    <td><strong><p id="subtotal">USD ${producto.unitCost}</p></strong></td>
                 
                </tr>
                
        </table>`
		
    
	
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


