const url_prod ='https://japceibal.github.io/emercado-api/cats_products/'+
localStorage.getItem("catID") + ".json";    


 function verarticulos(productos){
    let MostrarProductos = "";  
    for(let producto of productos){     
        MostrarProductos +=` 
         <div id="${producto.id}" class="list-group-item list-group-item-action">  
             <div class="row" > 
                <div class="col-3" id="col-3">
                     <img src="` + producto.image + `" alt="product image"  class="img-thumbnail">
                 </div>
                 <div class="col">
                     <div class="d-flex w-100 justify-content-between">
                         <div class="mb-1">
                         <h4>`+ producto.name + " " + "-" + " " + producto.currency + " " + producto.cost +`</h4>
                         <p> `+ producto.description +`</p>
                         </div>
                         <small class="text-muted">` + producto.soldCount + " " + "Vendidos" + ` </small> 
                     </div>

                 </div>
             </div>
         </div>`
        }
        document.getElementById("container").innerHTML = MostrarProductos;
    }
    
    function setProdID(id) {
        localStorage.setItem("ProductID", id);
        window.location = "product-info.html"
    }


    let articulos = [];

    document.addEventListener("DOMContentLoaded", function(e){    
        getJSONData(url_prod).then(function(resultObj){     
            if(resultObj.status === "ok"){                  
                articulos = resultObj.data.products;                
                verarticulos(articulos); 
                let listaproduc = document.getElementsByClassName('list-group-item');
                for (const item of listaproduc){
                    item.addEventListener("click", function(){
                        setProdID(item.id)
                    });
                }                   
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
        });

        let btnAsc = document.getElementById("sortAsc");
        let btnDesc = document.getElementById("sortDesc");
        let btnCount = document.getElementById("sortCount");

        function CostAsc(a, b){ 
            if (a.cost < b.cost){  
                return -1;
            }else if (a.cost > b.cost){  
                return 1;
            }else{
                return 0;  
            };
        }
        function CostDesc(a, b){
            if (a.cost > b.cost){
                return -1;
            }else if (a.cost < b.cost){
                return 1;
            }else{
                return 0;
            };
        }

        function sortCount(a, b){
            if (a.soldCount > b.soldCount){ 
                return -1;
            }else if (a.soldCount < b.soldCount){
                return 1;
            }else{
                return 0;
            };
        }    


        btnAsc.addEventListener('click', function(event){
            articulos.sort(CostAsc);
            verarticulos(articulos);
        });


        btnDesc.addEventListener('click', function(event){
            articulos.sort(CostDesc);
            verarticulos(articulos);
        });


        btnCount.addEventListener('click', function(event){
            articulos.sort(sortCount);
            verarticulos(articulos);
        });

    });

