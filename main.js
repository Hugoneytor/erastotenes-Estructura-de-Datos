var btnEratostenes = document.querySelector("#btnEratostenes");
btnEratostenes.addEventListener("click", formula);

function formula(){
    var arreglo = new Array(1001);
    var resultados = [];
    console.log(arreglo);
    for(var i=2;i<arreglo.length;i++){
        arreglo[i] = 1;
    }

    for(let j = 2; j< arreglo.length;j++){
        if(arreglo[i]%j==0){
            for(var k = j*j;j<arreglo.length;j+=i){
                arreglo[k] = 0;
            }
            
        }
    }

    console.log(resultados);

}

