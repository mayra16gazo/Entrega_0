let articuloSeleccionado = localStorage.getItem('ProductID');
const URL_INFO_PRODUCT = 'https://japceibal.github.io/emercado-api/products/'+ articuloSeleccionado + ".json";
const CONTENEDOR = document.getElementById('container');

fetch(URL_INFO_PRODUCT)
.then(respuesta => respuesta.json())
.then(datos =>{
    console.log(datos)
    let htmlInfoProduct = ''; 
    htmlInfoProduct+= `<h1>${datos.name}</h1><hr>
    <h3>Precio</h3>
    <p>${datos.currency + " " + datos.cost}</p>
    <h3>Descripción</h3>
    <p>${datos.description}</p>
    <h3>Categoria</h3>
    <p>${datos.category}</p>
    <h3>Imagenes Ilustrativas<h3>
    <div id="imagenesIlustrativas" class="row">
    <img src="${datos.images[0]}" class="img-thumbnail col-sm-3">
    <img src="${datos.images[1]}" class="img-thumbnail col-sm-3">
    <img src="${datos.images[2]}" class="img-thumbnail col-sm-3">
    <img src="${datos.images[3]}" class="img-thumbnail col-sm-3">
    </div>`
    
    CONTENEDOR.innerHTML = htmlInfoProduct;
        
});

const contenedorRelacionados = document.getElementById('container_relacionados');

fetch(URL_INFO_PRODUCT)
.then(respuesta => respuesta.json())
.then(datos=>{
    let htmlPorducrelacionado= ''
    htmlPorducrelacionado += `<h3>Productos Relacionados</h3>
    <div class="row">
    <h5>${datos.relatedProducts[0].name}</h5>
    <img src="${datos.relatedProducts[0].image}" class="img-thumbnail col-sm-3">
    <h5>${datos.relatedProducts[1].name}</h5>
    <img src="${datos.relatedProducts[1].image}" class="img-thumbnail col-sm-3">
    </div>`
    
    
    contenedorRelacionados.innerHTML = htmlPorducrelacionado;
});


const URL_COMENTARIOS = 'https://japceibal.github.io/emercado-api/products_comments/' + articuloSeleccionado + ".json";


fetch(URL_COMENTARIOS)
.then(respuesta => respuesta.json())
.then(datos =>{
    console.log(datos)
    let htmlcomentarios = '';
    for ( let i=0; i<datos.length; i++){
    htmlcomentarios += `<div class="list-group-item col-sm12">
    <div><b>${datos[i].user}</b> ${datos[i].dateTime} ${datos[i].score}</div>
    <p>${datos[i].description}</p>
    </div>`   
    }

    let COMENTARIOS = document.getElementById('containerComentarios')

    COMENTARIOS.innerHTML = htmlcomentarios;
});
