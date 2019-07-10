"strict mode";
alert("script launched");

debugger;

function button(){
   
   //2 opciones para esta func: O se "computan" todas las snaps y printea todo d golpe
                              // O Guardar snap =  Printear (sin sobreescribe)
   function printear(string){ //sobreescribe
      out.innerHTML = string;
   }

   //const buton = document.getElementById("boton");
   const input = document.getElementById("input").value;
   const out= document.getElementById("espacio");
   const tamñ = input.length;

   

   for (var i = 0; i < tamñ;i++){

      var charBlq = input[0];

      var Orig = //iria esto dentro de loop? (3-4-5)

      

      printear(input);
      printear(tamñ);
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
