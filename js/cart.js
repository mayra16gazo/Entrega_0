const URL_PRODUCTO = 'https://japceibal.github.io/emercado-api/user_cart/25801.json';
let nombreProduc = document.getElementById('nombreProducto');
let imgProduc = document.getElementById('imgProduc');
let costoProduc = document.getElementById('costoProduc')
const TABLECART = document.getElementById('table');


fetch(URL_PRODUCTO)
.then(respuesta => respuesta.json())
.then(datos =>{
    console.log(datos)
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
                    <td>${producto.count}</th></label>
                    <td></td>
                    <td></th>
                </tr>
        </table>`
    }
   
    TABLECART.innerHTML = htmlcart;

})

//<td id="subtotal">${funcionparamultiplicar(producto.unitCost)}<td>