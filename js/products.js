const url_prod ='https://japceibal.github.io/emercado-api/cats_products/'+
localStorage.getItem("catID") + ".json";


 function verarticulos(autos){
    let MostrarAutos = "";  
    for(let car of autos){     
        MostrarAutos +=` 
         <div class="list-group-item list-group-item-action">  
             <div class="row"> 
                <div class="col-3">
                     <img src="` + car.image + `" alt="product image"  class="img-thumbnail">
                 </div>
                 <div class="col">
                     <div class="d-flex w-100 justify-content-between">
                         <div class="mb-1">
                         <h4>`+ car.name + " " + "-" + " " + car.currency + " " + car.cost +`</h4>
                         <p> `+ car.description +`</p>
                         </div>
                         <small class="text-muted">` + car.soldCount + " " + "Vendidos" + ` </small> 
                     </div>

                 </div>
             </div>
         </div>`
         
         
     }
     document.getElementById("container").innerHTML = MostrarAutos;   


    }

    let articulos = [];

    document.addEventListener("DOMContentLoaded", function(e){    
        getJSONData(url_prod).then(function(resultObj){     
            if(resultObj.status === "ok"){                  
                articulos = resultObj.data.products;                
                verarticulos(articulos);                    
            }
        })
        
        function filter(precio){
        let costMin = document.getElementById('rangeFilterCostMin').value;
        let costMax = document.getElementById('rangeFilterCostMax').value;
        let filterDet = precio.filter(car => car.cost >= costMin && car.cost <= costMax);
        verarticulos(filterDet);
        
        }
        document.getElementById('rangeFilterCost').addEventListener('click', function(){
            filter(articulos);
        });


        document.getElementById('clearRangeFilter').addEventListener('click',function(){
            verarticulos(articulos);
            document.getElementById('rangeFilterCostMin').value = "" ;
            document.getElementById('rangeFilterCostMax').value = "" ;
        })

    })

