/*Repetir el ejercicio 1 con cuatro valores enteros y
tres valores reales. En este caso, los números deben
 ser almacenados en una única variable,
 deben ser todos positivos y
 se debe mostrar un mensaje de “Aprobado”
 cuando la media supere el 5. Si la media es menor a
 5 saldrá el mensaje "Ponte las pilas".*/

 function usernum2(n1,n2,n3,n4,n5,n6,n7){
   var n1 =  prompt("Introduzca el número ");
   var n2 =  prompt("Introduzca el número ");
   var n3 =  prompt("Introduzca el número ");
   var n4 =  prompt("Introduzca el número ");
   // Valores Reales
   var n5 =  prompt("Introduzca el número ");
   var n6 =  prompt("Introduzca el número ");
   var n7 =  prompt("Introduzca el número ");

   var media = ((parseInt(n1) + parseInt(n2)+ parseInt(n3)+ parseInt(n4)+ parseFloat(n5)+ parseFloat(n6)+ parseFloat(n7))/7);
if (media< 5) {
  alert("Ponte a estudiar \n tu nota es: " +media.toFixed(2));
}
else {
  alert("Estás Aprobado " + media.toFixed(2));
}

}
