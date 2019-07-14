   **COMBINATORIA DE abcd**


***De manera ascendente , a diferencia de metodo descen. , se bloquean***
***todos chars -1 de string: con el cual se hace combinatoria en todas pos***

CMCC = coleccion de muestras de combinatoria de los char.

Bloqueo = secuencia fija(string) con determinado orden de cadena de chars.
    AB bloqueo distinto de BA.

S(n) = numero de chars del string  a calc. combinatoria. (Subproductos
de una misma palabra concebida como solución final a resolver.)

Minusculas = Superproducto de CMCC o Origen.
Mayusculas = Suproducto de CMCC.

#S(1) Combinatoria de a(origen) = A. [1CMCC para 0 bloqueo?]

#S(2) Com. de (a)+b = AB , BA.   [2CMCC para 1 b]

#S(3) Com. de:
             (ab)+c     (ba)+c       [6CMCC para 2 b]

           = CAB    ,   CBA
             ACB    ,   BCA
             ABC    ,   BAC.

#S(4) Com. de:
            (ab)+c     (ba)+c       [24CMCC para  6b]