1. Error en test():
   * Dandole valor a la matriz falla en segunda iteracion de j 
   con el siguiente mensaje de error:
   'Uncaught TypeError: Cannot set property '0' of undefined'
   en matrizI[1][0] = contador (ERROR valor UNDEFINED?!?!) 
   
   *** Posible explicacion: ***
   *** He declarado el arrayI con solo 1 de tamaño[0], que contiene
   otro arrayJ, pero cuando itera a [1] este no existe y debe haber
   otro arrayJ ahi, luego VE CREANDO EL TAMAÑO DE arrayI a medida que 
   queremos rellenar arraysJ  ***
