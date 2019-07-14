   **COMBINATORIA DE abcd**


***De manera ascendente , a diferencia de metodo descen. , se bloquean***
***todos chars -1 de string: con el cual se hace combinatoria en todas pos***

CMCC = coleccion de muestras de combinatoria de los char.

Bloqueos = secuencia fija(string) con determinado orden de cadena de chars.
    AB bloqueo distinto de BA.

S(n) = numero de chars del string  a calc. combinatoria. (Subproductos
de una misma palabra concebida como solución final a resolver.)

Minusculas = Superproducto de CMCC o Origen.
Mayusculas = Suproducto de CMCC.

#S(1) Combinatoria de:  [1CMCC para 0 bloqueos]

            a(origen) = A.

#S(2) Com. de:  [2CMCC para 1 b]  *La computación arranca desde aqui ORIGEN! verdadero

            (a)+b = BA , AB.

#S(3) Com. de:  [6CMCC para 2 b]

             (ab)+c     (ba)+c       

           = CAB    ,   CBA
             ACB    ,   BCA
             ABC    ,   BAC.

#S(4) Com. de:  [24CMCC para  6b]

             (cab)+d     (cba)+d    (acb)+d   (bca)+d    (abc)+d    (bac)+d

           = DCAB    ,   DCBA   ,   DACB   ,   DBCA   ,   DABC   ,   DBAC
             CDAB    ,   CDBA   ,   ADCB   ,   BDCA   ,   ADBC   ,   BDAC
             CADB    ,   CBDA   ,   ACDB   ,   BCDA   ,   ABDC   ,   BADC
             CABD    ,   CBAD   ,   ACBD   ,   BCAD   ,   ABCD   ,   BACD.

