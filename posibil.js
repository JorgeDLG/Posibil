"strict mode";
alert("script launched");


function button(){
   
   //2 opciones para esta func: O se "computan" todas las snaps y printea todo d golpe
                              // O Guardar snap =  Printear (sin sobreescribe)
   
   //const buton = document.getElementById("boton");
   const input = document.getElementById("input").value;
   const out= document.getElementById("espacio"); //.value?
   
   var Orig = input;
   var snaps = [,]; //CONS?

   function printear(string){ //sobreescribe
      out.innerHTML = string;
   }

   function Conmuta(nBlq,original,snaps){

   }

   function desplazar(charBlq,string){
      
      let stringArray = string.split('');

      let chAdesp = stringArray.indexOf(charBlq); //PROBLEMA con chars iguales

      let aux = stringArray[chAdesp];

      stringArray[chAdesp] = stringArray[chAdesp+1];
      stringArray[chAdesp+1] = aux;

      debugger;
      let stDesplazada = stringArray.join(""); //ERROR: Me lo une con comas
      return stDesplazada;
   }
   
   // asegura los scopes de las var
   for (var nBlq = 0; nBlq < input.length - 1; nBlq++){ //nBlq = Numero Ordinal Char Bloqueado en palabra(input)
      
      var charBlq = Orig[nBlq]; //podria ser una const cogida del Input?
      snaps[nBlq,0] = Orig; //Original siempre va a ser 0

      //Conmuta(nBlq,Orig,snaps);

      //REVALORIZAR Orig POR CADA ITERACION al final!
      var Orig = desplazar(charBlq,Orig);
   }

   nBlq++;
   snaps[nBlq,0] = Orig;
   //Conmuta(nBlq,Orig,snaps); //Ultima conmut fuera porque no queremos que DESPLACE fuera de la palabra.
   
}


//window.addEventListener('click



   /* ..INSTRUCCIONES..
1. Leer palabra del input
2. Iniciar loop de bloqueo del 1º char
3. Guardar estado del string como ORIGINAL y SNAP
4. CONMUTACION Y SNAP **(KIT cuestion cuando más chars)
5.  Volver a ORIGINAL e ITERAR loop bloqueo 1º char
6. REPETIR 3-4-5
7.  Cuando revase ultimoChar fin loop bloqueo.. Y FIN APP.


(chars * multiplicador =snaps totales) 3*2=6 4*6=24
*/
