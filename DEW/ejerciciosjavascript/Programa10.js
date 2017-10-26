/*
10. Modificar el ejercicio anterior para pedir dos caracteres en lugar de uno,
 se seguirá pidiendo la anchura pero se aplicará un estilo diferente a cada carácter,
 de forma que sea fácil su distinción visual. Para ello se añadirán estilos CSS que deberán estar
 separados del código HTML y JS.*/

 function draw2(base,caract){
 // j columnas, i = rows

 var caract1=prompt("Introduce el símbolo");
 var caract2=prompt("Introduce tro símbolo");
 //var espacio="-";
 var base =prompt("Introduce el tamaño");

   for (i=base; i>0; i--){
       for (j=0; j<=i; j++){

               document.write(caract1,caract2);
       }
         document.write( "<br /> ");
     }
 }

