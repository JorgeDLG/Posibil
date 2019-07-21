"strict mode";

function test(){
// crear arrays 2 dimensiones https://tutobasico.com/multidimensionales-javascript/
   
   const out= document.getElementById("espacio");
   
   const tamañoI = 3, tamañoJ = 5;  //y si no se el tamaño del array?
   
   //debugger;

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



   /*  USO DEL FOR OF:

      for (let iterI of matriz){
         for(let iterJ of iterI){
            console.log(iterI,iterJ);
         }
      }
   */
}
function testScopes(){
   var str = "a";
   var long = str.length; 


   if (true) {
      let str = "zzz";
      let long = str.length; 
      console.log(str,long);
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
function formatearAhorizontal(matriz){
   // debugger;
   
   //INPUT
   // matriz =[matJ=["cab","acb","abc"]]; 
   // matriz.push(matJ=["cba","bca","bac"]);
   
   var matrixHORIZ =[];
   //OUTPUT expected: matrix = [matJ=["ab"],matJ=["ba"]];
   var contJ = 0;

   for (let i = 0; i < matriz.length; i++) {
      for (let j = 0; j < matriz[i].length; j++) {
         
         matrixHORIZ.push(new Array(1));
         matrixHORIZ[contJ][0] = matriz[i][j];
         contJ++;
      }
      matrixHORIZ.push("#") //separador de bloqueo PARA EL CCMC final formatear el output
   }
   return matrixHORIZ;
}
function delSeparadorBlq(matriz){
   // debugger;
   // matriz =[matJ=["ba"]];
   // matriz.push(matJ=["ab"]);
   // matriz.push(matJ=["#"]);
   
   // matriz.push(matJ=["ca"]);
   // matriz.push(matJ=["ac"]);
   // matriz.push(matJ=["#"]);

   var iter = 0;
   while (iter < matriz.length) { //que el iterador no avance si se elimina

      var strEnArrJ = matriz[iter][0];
      if (strEnArrJ === "#") {
         matriz.splice(iter,1); //.splice(pos a 'empezar' a remover,Npos hasta fin a remover)
      }
      else
         iter++;
   }
}

function button(){
   const palabra = document.getElementById("input").value;
   const out= document.getElementById("espacio");
   const long = palabra.length;
   var workChar; //el que se va añadiendo
   
      //[$] que estos vals se calc dentro de bucle i o dentro de bucle bloq en if y else
      var palHijo = palabra[0]; 
      var longHijo = palHijo.length;
      //
   var nBlqsEnI;
   

   
   for (var i = 1; i <= long - 1; i++){ //CHAR de PALABRA INPUT USUARIO
      workChar = palabra[i];

      //CUANDO LLEGUE AQUI con i = 2, palHijo y longHijo revalorizados
      //REVALORIZA SALVO EN i=0 ??!! O mejor [$]
      /*palHijo = null;
      longHijo = null;
      */
      nBlqsEnI = Factorial(longHijo)/longHijo; //longHijo debe revalorizarse
      for (var nBloq = 0; nBloq < nBlqsEnI; nBloq++) {
         
         if (i === 1) { //APAÑO para S(2) para que no coja datos de snap pero lo "inicie"
            var palHijoAB = palHijo+workChar, palHijoBA = workChar.concat(palHijo);
            snapsBlqs = [arrayJ = [palHijoBA,palHijoAB]]
         }
         else{ //(>=S3) coge datos de snap y calc CMCC
            //1º INPT: snapsBlqs[0,0] = "ba" / snapsBlqs[0,1] = "ab" / snapsBlqs[0,2] = "#"
            delSeparadorBlq(snapsBlqs);
            //func añadir working char al inicio de cada "string en col n fila 1"
            





            

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

      } //FinBloqueo
         snapsBlqs = formatearAhorizontal(snapsBlqs); //AQUI REVALORIZAR SNAPS una vez obtenidos CMCC
            //Nº bloqueos o snaps se establecen por Nº iteraciones de j.
   } //FinI

} //FinButton