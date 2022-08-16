const url_prod ='https://japceibal.github.io/emercado-api/cats_products/101.json';

 let articulos = [];

 function verarticulos(autos){
    let htmlContentToAppend = "";
    for(let car of autos.products){
        htmlContentToAppend +=`
        <div class="list-group-item list-group-item-action"> 
             <div class="row"> 
                <div class="col-3">
                     <img src="` + car.image + `" alt="product image"  class="img-thumbnail">
                 </div>
                 <div class="col">
                     <div class="d-flex w-100 justify-content-between">
                         <div class="mb-1">
                         <h4>`+ car.name + " " + "-" + " " + car.currency + " " +car.cost +`</h4>
                         <p> `+ car.description +`</p>
                         </div>
                         <small class="text-muted">` + car.soldCount + " " + "Vendidos" + ` </small> 
                     </div>

                 </div>
             </div>
         </div>`
         
         
     }
     document.getElementById("container").innerHTML = htmlContentToAppend;


    }

    document.addEventListener("DOMContentLoaded", function(e){
        getJSONData(url_prod).then(function(resultObj){
            if(resultObj.status === "ok"){
                articulos = resultObj.data;
                verarticulos(articulos);
            }
        })
    })

 


