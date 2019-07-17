"strict mode";
alert("script launched");

function test(){
// crear arrays 2 dimensiones https://tutobasico.com/multidimensionales-javascript/
   
   const out= document.getElementById("espacio");
   
   const tamañoI = 3, tamañoJ = 5;  //y si no se el tamaño del array?
   
   debugger;

   var arrayI = new Array(tamañoI);
   var contador = 0; //valores random a meter (ejemplo)

   //CREANDO LA ESTRUC DE LA MATRIZ
   for (let i = 0; i < tamañoI; i++) { 
      arrayI[i] = new Array(tamañoJ);
   }
   //DANDO VALORES A LA MATRIZ
   arrayI.forEach(val => {
      for (let j = 0; j < tamañoJ; j++) {
         val[j] = contador;
         contador++;  
      }
   });
   //PRINTEANDO LA MATRIZ
   for (let i = 0; i < tamañoI; i++) {
      for (let j = 0; j < tamañoJ; j++) {      
         out.innerHTML += arrayI[i][j] + " ";
      }
   }
}
function Factorial(numero){
   
   if (numero === 0) {
      return 1;
   }
   else{
      return numero * Factorial(numero-1);
   }
}
function desplazar(charBlq,string){
   
   let stringArray = string.split('');

   let chAdesp = stringArray.indexOf(charBlq); //PROBLEMA con chars iguales

   let aux = stringArray[chAdesp];

   stringArray[chAdesp] = stringArray[chAdesp+1];
   stringArray[chAdesp+1] = aux;

   let stDesplazada = stringArray.join("");
   return stDesplazada;
}
function formatearAhorizontal(matriz){ //repasa el paso de parametros(en este caso matriz)
   var matriz = null;

   

   return matriz;
}
function button(){
   debugger;
   const palabra = document.getElementById("input").value;
   const long = palabra.length;
   //const origen = palabra[0];
   var workChar; //el que se va añadiendo
   var palHijo = palabra[0];
   var longHijo = palHijo.length;
   //    CREAMOS LA MATRIZ EN EJECUCUION PARA DARLE EL TAMAÑO VARIABLE ADECUADO
   // var  jCol = [];
   // var snapsBlqs = [bloqueos][jCol];
   var nBlqsEnI;
   const out= document.getElementById("espacio");
   

   for (var i = 1; i <= long - 1; i++){
      workChar = palabra[i];
      nBlqsEnI = Factorial(longHijo)/longHijo; //longHijo debe revalorizarse
      
      for (var nBloq = 0; nBloq < nBlqsEnI; nBloq++) {
         
         if (i > 1) { //(>=S3) coge datos de snap y calc CMCC
            //palHijo = snaps[] 
            

                        //S3 EN ADELANTE TO-DO//

            // for (var j = 0; j <= longHijo; j++) {
               
            //    palHijo = workChar + palHijo;
            //    snapsBlqs[nBloq][0] = palHijo;
            //    workChar = palHijo[0];
            //    if(true){
                  
            //    }
            //    else{ //movemos workingChar y creamos bloqueos
            //       palHijo = desplazar(workChar,palHijo);
            //       snapsBlqs[nBloq][j] = palHijo;
            //    }
            // }
         }
         else{ //APAÑO para S(2) para que no coja datos de snap pero lo "inicie"

            let palHijo = palHijo + workChar; //AB? longHijo=2?
            var snapsBlqs = new Array(nBlqsEnI); //arrayI
            
            for (let nBlq = 0; nBlq < nBlqsEnI; nBlq++) {
               snapsBlqs = new Array(longHijo); //arrayJ
            }

            snapsBlqs[0][0] = palHijo; //AB?
            palHijo = workChar + palHijo; //ME DICE QUE YA HA SIDO DECLARADA?
            snapsBlqs[0][1] = palHijo; //BA?
         }

      }
         snapsBlqs = formatearAhorizontal(snapsBlqs); //AQUI REVALORIZAR SNAPS una vez obtenidos CMCC
            //Nº bloqueos o snaps se establecen por Nº iteraciones de j.
   }

}