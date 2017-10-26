// Realizar un programa que pida al usuario mediante
// prompt 6 valores enteros que serán almacenados en 6
// variables distintas. Una vez introducidos se deberá
// mostrar un mensaje que indique el número mayor,
// el menor, la suma de los enteros introducidos
// y la diferencia entre el mayor y el menor.


function calculator(n1,n2,n2,n3,n4,n5,n6){

 var n1 =  prompt("Introduzca el número ");
 var n2 =  prompt("Introduzca el número ");
 var n3 =  prompt("Introduzca el número ");
 var n4 =  prompt("Introduzca el número ");
 var n5 =  prompt("Introduzca el número ");
 var n6 =  prompt("Introduzca el número ");

 var suma = (parseInt(n1) + parseInt(n2)+ parseInt(n3)+ parseInt(n4)+ parseInt(n5)+ parseInt(n6));


 var maximo = Math.max(n1,n2,n3,n4,n5,n6);
 var minimo = Math.min(n1,n2,n3,n4,n5,n6);
 alert("el mayor es "+ maximo);
alert("La suma es: " + suma);
  alert("el menor es "+ minimo);
alert("el diferencia es "+(maximo - minimo));
}
