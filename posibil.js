"strict mode";
alert("script launched");


function button(){
   
   const palabra = document.getElementById("input").value;
   const long = palabra.length;
   //const origen = palabra[0];
   var workChar; //el que se va añadiendo
   var palHijo =palabra[0];
   var longHijo = palHijo.length;
   var snaps = [,]; //CONS?


   const out= document.getElementById("espacio"); //.value?


   function desplazar(charBlq,string){
      
      let stringArray = string.split('');

      let chAdesp = stringArray.indexOf(charBlq); //PROBLEMA con chars iguales

      let aux = stringArray[chAdesp];

      stringArray[chAdesp] = stringArray[chAdesp+1];
      stringArray[chAdesp+1] = aux;

      debugger;
      let stDesplazada = stringArray.join("");
      return stDesplazada;
   }
   
   for (var i = 1; i < long - 1; i++){
      
      workChar = palabra[i];

      for (var j = 0; j < array.length; j++) { //comprueba longHijo
         
         //Nº bloqueos o snaps se establecen por Nº iteraciones de j.
         
      }
      palHijo
      
   }
   
}