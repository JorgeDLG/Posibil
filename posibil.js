"strict mode";
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
   var matrixHORIZ =[];
   var contBlq = 0;

   for (let i = 0; i < matriz.length; i++) {
      for (let j = 0; j < matriz[i].length; j++) {
         
         matrixHORIZ.push(new Array(1));
         matrixHORIZ[contBlq][0] = matriz[i][j];
         contBlq++;
      }
      matrixHORIZ.push("#") //separador de bloqueo PARA EL CCMC final formatear el output
      contBlq++;
   }
   return matrixHORIZ;
}
function delSeparadorBlq(matriz){
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
function addAlInicioCadaCol(Wchar, matrizHO){
   for (let i = 0; i < matrizHO.length; i++) {
      matrizHO[i][0] = Wchar + matrizHO[i][0];
   }
}
function dibujarSnapsEnparrafos(matriz) {
   
   content = document.createTextNode("Estas de coña?");
   parr.appendChild(content);
   div.appendChild(parr);

   return 
}
function button(){
   const palabra = document.getElementById("input").value;
   const div = document.getElementById("divOut");
   const pCoña = document.getElementById("mensajesCoña");
   
   var parr = document.createElement("p");
   var content = "";
   
   const long = palabra.length;
   var workChar;
   var palHijo = palabra[0]; 
   var longHijo = palHijo.length;

   var nBlqsEnI;

   if (long === 1){
      // debugger;
      pCoña.innerHTML = "Estas de coña?";
   }
   else if (long > 7){
      pCoña.innerHTML = "Demasiado pides tt  X(";
   }
   else{
      pCoña.innerHTML = "";
   
      for (var i = 1; i <= long - 1; i++){ //CHAR de PALABRA INPUT USUARIO
         workChar = palabra[i];
   
         if (i>1) {
            //solo para calcular nBlqsEnI
            delSeparadorBlq(snapsBlqs);
            addAlInicioCadaCol(workChar,snapsBlqs);
            palHijo = snapsBlqs[0][0];
            longHijo = palHijo.length;
         }
         nBlqsEnI = Factorial(longHijo)/longHijo;
         
         for (var nBloq = 0; nBloq < nBlqsEnI; nBloq++) {
            
            if (i === 1) { //APAÑO para S(2) para que no coja datos de snap pero lo "inicie"
               var palHijoAB = palHijo+workChar, palHijoBA = workChar.concat(palHijo);
               snapsBlqs = [arrayJ = [palHijoBA,palHijoAB]]
            }
            else{ //(>=S3) coge datos de snap y calc CMCC
               
               for (var j = 0; j < longHijo-1; j++) {
                  var str = snapsBlqs[nBloq][j];
                  var newStr = desplazar(workChar,str);
                     //pusheando el arrayJ con el str desplazado
                  var arrJ = snapsBlqs[nBloq];
                  arrJ.push(newStr);
                  snapsBlqs[nBloq] = arrJ;
               }
            }
         } //FinBloqueo
            snapsBlqs = formatearAhorizontal(snapsBlqs);
      } //FinI
      console.table(snapsBlqs);
      dibujarSnapsEnparrafos(snapsBlqs);
      //que esta func devuelva parrafos en bucle en el nodo adecuado?
   }
} //FinButton