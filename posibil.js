"strict mode";
alert("script launched");

debugger;

function button(){
   
   function printear(stng){
      esp.innerHTML = stng;
   }

const buton = document.getElementById("boton");
const inpt = document.getElementById("input");
const esp= document.getElementById("espacio");
const tamñ = inpt.value.length;

console.log(buton,inpt,esp,tamñ);
   printear(inpt);

   /*for (var i = 0; i < tamñ;i++){

   printear(inpt);
   printear(tamñ);
   }
   */
}


//window.addEventListener('click



   /* ..INSTRUCCIONES..
1. Leer palabra del input
2. Iniciar loop con char a* en 1º pos
3. Guardar estado del string
4. Bloquear hasta penultimo char y conmutar chars no bloqueados. 
   (al ser 3 el length del string solo hace 1 conmutacion.
5. Iterar el loop a* en 2º pos
6. Guardar estado del string
7.  PASO 4 BIS
8. Iterar el loop a* en 3º pos
9. PASO 4 BIS
10. el interador a revasado a la ultima posicion del string luego fin loop fin programa.
*/
