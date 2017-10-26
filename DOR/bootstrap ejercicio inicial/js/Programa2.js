/* Solicitar al usuario un número entero a
través de una ventana de diálogo.
Multiplicar ese número por 2.5 y sumarle 100.
 Mostrar el resultado
en otra ventana de diálogo*/

function usernum(){

  var nuser = prompt("Introduzca un número: ");
  if (!/^([0-9])*$/.test(nuser)) {
    alert("Solo ser permiten Números");
  }
  alert("El resultado es:  "+ ((nuser * 2.5)+100));
}
