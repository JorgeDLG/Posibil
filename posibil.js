"strict mode";
alert("script launched");
function test(){
// crear arrays 2 dimensiones https://tutobasico.com/multidimensionales-javascript/
   const out= document.getElementById("espacio"); //.value?

   var matriz = [,];
   var contador = 0;

   // matriz[4,2];

   for (let i = 0; i < 5; i++) {
      
      for (let j = 0; j < 5; j++) {
         debugger;
         matriz[i,j] = contador;
         contador++;
      }
   }
   
   for (let i = 0; i < 5; i++) {
      
      for (let j = 0; j < 5; j++) {
      
         out.innerHTML += matriz[i,j] + " ";
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

function button(){
   debugger;
   const palabra = document.getElementById("input").value;
   const long = palabra.length;
   //const origen = palabra[0];
   var workChar; //el que se va añadiendo
   var palHijo =palabra[0];
   var longHijo = palHijo.length;
   var bloqueos = [] , jCol = [];
   var snaps = [bloqueos][jCol];
   var NbloqTot;
   var nBloq; //0 porque es una variable para indexar un ARRAY
   const out= document.getElementById("espacio"); //.value?

   function desplazar(charBlq,string){
      
      let stringArray = string.split('');

      let chAdesp = stringArray.indexOf(charBlq); //PROBLEMA con chars iguales

      let aux = stringArray[chAdesp];

      stringArray[chAdesp] = stringArray[chAdesp+1];
      stringArray[chAdesp+1] = aux;

      let stDesplazada = stringArray.join("");
      return stDesplazada;
   }
   
   for (var i = 1; i <= long - 1; i++){
      workChar = palabra[i];
      NbloqTot = Factorial(longHijo)/longHijo;

      for (nBloq = 0; nBloq < NbloqTot; nBloq++) {
         
         if (i > 1) { //coge datos de snap y revaloriza (nos encontramos en S(3))
            //palHijo = snaps[] 
            
         }
         else{ //apaño para S(2) para que no coja datos de snap pero lo "inicie"
            let palHijo = palHijo + workChar;
            snaps[0][0] = palHijo;
            let palHijo = workChar + palHijo;
            snaps[0][1] = palHijo;
         }

         for (var j = 0; j <= longHijo; j++) {
            
            if (j === 0) { //revisar!!
               palHijo = workChar + palHijo;
               snaps[nBloq][0] = palHijo;
               workChar = palHijo[0];
            }
            else{ //movemos workingChar y creamos bloqueos
               palHijo = desplazar(workChar,palHijo);
               snaps[nBloq][j] = palHijo;
            }
         }
         //AQUI REVALORIZAR SNAPS una vez obtenidos CMCC
            //por cada "Revalorizacion de snaps" los valores obtenidos
            // por iterar la j , se trasladan(ordenadamente) a bloqueos donde j=0
            //Nº bloqueos o snaps se establecen por Nº iteraciones de j.
      }

   }
   
}