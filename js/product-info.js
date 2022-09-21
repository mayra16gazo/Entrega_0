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
    <div id="carousel" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
    <div class="carousel-item active">
    <img src="${datos.images[0]}" class="d-block w-100" alt="100">
    </div>
    <div class="carousel-item">
    <img src="${datos.images[1]}" class="d-block w-100" alt="100">
    </div>
    <div class="carousel-item">
    <img src="${datos.images[2]}" class="d-block w-100" alt="100">
    </div>
    <div class="carousel-item">
    <img src="${datos.images[3]}" class="d-block w-100" alt="100">
    </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
    </button>
    </div>
    <br>
    <h3>Productos Relacionados</h3>
    <div id="${datos.relatedProducts[0].id}" class="articulosRelacionados" >
    <div class="row">
    <h5>${datos.relatedProducts[0].name}</h5>
    <img src="${datos.relatedProducts[0].image}" class="img-thumbnail col-sm-3">
    </div>
    </div>
    <div id="${datos.relatedProducts[1].id}" class="articulosRelacionados">
    <div class="row">
    <h5>${datos.relatedProducts[1].name}</h5>
    <img src="${datos.relatedProducts[1].image}" class="img-thumbnail col-sm-3">
    </div>
    </div>`
    
    
    CONTENEDOR.innerHTML = htmlInfoProduct;
        
});

// function setRelacionados(id){
//     localStorage.setItem("RelacionadosID", datos.relatedProducts[0].id);
//     window.location = "product-info.html"
// }

// let articulosRelacionados = document.getElementsByClassName('articulosRelacionados');
// for (const item of articulosRelacionados){
//     item.addEventListener('click', function(){
//         setProdID(item.id)
//     });
// }

 function puntuacion(start){
     let estrellas='';
     for(let i = 1; i <= 5; i ++) {
         if (i<=start){
            // estrellas+="*";
           estrellas += '<i class="fas fa-star"></i>'; //icono estrella llena
         }else{
           estrellas+='<i class="far fa-star"></i>';
         }
        }
        return estrellas;

    };

const URL_COMENTARIOS = 'https://japceibal.github.io/emercado-api/products_comments/' + articuloSeleccionado + ".json";



fetch(URL_COMENTARIOS)
.then(respuesta => respuesta.json())
.then(datos =>{
    console.log(datos)
    let htmlcomentarios = '';
    for ( let i=0; i<datos.length; i++){
    htmlcomentarios += `<div class="list-group-item col-sm12">
    <div><b>${datos[i].user}</b> ${datos[i].dateTime} ${puntuacion(datos[i].score)}</div>
    <p>${datos[i].description}</p>
    </div>`   
    }

    let COMENTARIOS = document.getElementById('containerComentarios')

    COMENTARIOS.innerHTML = htmlcomentarios;


});

let fecha = new Date()
let EnviarComentario = document.getElementById('enviarComentario');
let dateTime = `${fecha.getFullYear()}-${fecha.getMonth() + 1}-${fecha.getDate()}-${fecha.toLocaleTimeString()}`;

EnviarComentario.addEventListener('click', function(){
    let Descripcion = document.getElementById('newcomentario').value; //lo que se escribe en el comentario
    let PuntuacionEnviada = document.getElementById('puntuacion').value; //puntuacion
    let usuario = localStorage.getItem('username');
    let htmlnuevoComentario = '';
    htmlnuevoComentario +=`<div class="list-group-item col-sm12">
    <div><b>${usuario}</b> ${dateTime} ${PuntuacionEnviada}</div>
    <p>${Descripcion}</p>
    </div>`
   let ACAVA = document.getElementById('nuevoComentario');
   ACAVA.innerHTML += htmlnuevoComentario;

});


    


