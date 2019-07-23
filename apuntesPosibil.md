   **COMBINATORIA DE abcd**


***De manera ascendente , a diferencia de metodo descen. , se bloquean***
***todos chars -1 de string: con el cual se hace combinatoria en todas pos***

CMCC = coleccion de muestras de combinatoria de los char.

Bloqueos = secuencia fija(string) con determinado orden de cadena de chars.
SIN CONTAR EL WORKING CHAR!!!
    AB bloqueo distinto de BA.  

S(n) = numero de chars del string  a calc. combinatoria. (Subproductos
de una misma palabra concebida como solución final a resolver.)

Minusculas = Superproducto de CMCC o Origen.
Mayusculas = Suproducto de CMCC.

#S(1) Combinatoria de:  [1CMCC para 0 bloqueos]

    a(origen) = A.

#S(2) Com. de:  [2CMCC para 1 b]  *La computación arranca desde aqui ORIGEN! verdadero

    (a)+b (Mejora el codigo para que guarda en orden: AB, BA)

    = BA ,
      AB.

#S(3) Com. de:  [6CMCC para 2 b]

    (ba)+c     (ab)+c       

    = CBA    ,   CAB
      BCA    ,   ACB
      BAC    ,   ABC.

#S(4) Com. de:  [24CMCC para  6b]

    (cba)+d     (bca)+d    (bac)+d    (cab)+d    (acb)+d    (abc)+d
    = DCBA    ,   DBCA   ,   DBAC   ,   DCAB   ,   DACB   ,   DABC
      CDBA    ,   BDCA   ,   BDAC   ,   CDAB   ,   ADCB   ,   ADBC
      CBDA    ,   BCDA   ,   BADC   ,   CADB   ,   ACDB   ,   ABDC
      CBAD    ,   BCAD   ,   BACD   ,   CABD   ,   ACBD   ,   ABCD.


**DATO DE INTERES SOBRE MATRICES:**
  Puedes usar console.table(matriz)
  para dibujar la matriz en consola del navegador.