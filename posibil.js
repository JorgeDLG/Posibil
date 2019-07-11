"strict mode";
alert("script launched");

debugger;

function button(){
   
   //2 opciones para esta func: O se "computan" todas las snaps y printea todo d golpe
                              // O Guardar snap =  Printear (sin sobreescribe)
   
   //const buton = document.getElementById("boton");
   const input = document.getElementById("input").value;
   const out= document.getElementById("espacio"); //.value?
   
   var Orig = input;
   var snaps = [,];

   function printear(string){ //sobreescribe
      out.innerHTML = string;
   }

   function Conmuta(){

   }
   for (var i = 0; i < input.length;i++){
      
      var charBlq = input[i];
      snaps[i,0] = Orig; //Original siempre va a ser 0

      Conmuta();

      

      //REVALORIZAR Orig POR CADA ITERACION al final!

   }
   
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
