const URL_PRODUCTO = 'https://japceibal.github.io/emercado-api/user_cart/25801.json';
let nombreProduc = document.getElementById('nombreProducto');
let imgProduc = document.getElementById('imgProduc');
let costoProduc = document.getElementById('costoProduc');
const TABLECART = document.getElementById('table');


fetch(URL_PRODUCTO)
.then(respuesta => respuesta.json())
.then(datos =>{
    console.log(datos);
    let htmlcart ='';
    for(let producto of datos.articles){
        function multiplicar(num1, num2){
            var num1 = producto.unitCost;
            var num2 = producto.count;

            return r=num1*num2;
        }

        htmlcart +=`
        <table class="table">
                <tr>
                    <th></th>
                    <th>Nombre</th>
                    <th>Costo</th>
                    <th><label for="cantProducto">Cantidad</label>
                    <th>Sub.total</th>
                </tr>
                <tr>
                    <td id="imgProduc"><img src="${producto.image}" class="img-thumbnail col-7" "></td>
                    <td id="nombreProducto">${producto.name}</td>
                    <td id="costoProducto">${producto.currency + " " + producto.unitCost}</td>
                    <td><input type="number" min="0" value="1"></td>
                    <td><p id="subtotal">${multiplicar()}</p></td>
                </tr>
        </table>`

    }

    TABLECART.innerHTML = htmlcart;

})