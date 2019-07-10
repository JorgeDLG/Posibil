"strict mode";
alert("script launched");

debugger;

function button(){
   
   function printear(stng){
      esp.innerHTML = stng;
   }

   const buton = document.getElementById("boton");
   const inpt = document.getElementById("input").value;
   const esp= document.getElementById("espacio");
   const tamñ = inpt.length;

   console.log(buton,inpt,esp,tamñ);
   printear(inpt);

   for (var i = 0; i < tamñ;i++){

      printear(inpt);
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
