/*3. A continuación se incluirá un nuevo botón que le
solicitará al usuario un color y se mostrará el texto
"Este es el color elegido" con el color de fondo seleccionado por el usuario.
En caso de que el color que ha elegido el usuario no sea correcto o
 no pueda establecerse, mostraremos "El color elegido no está controlado"
  en formato h1 y estableceremos el fondo de la página a blanco.
Los colores se deben de introducir en formato hexadecimal.*/

function cambiarfondo(){
// '#CCCCCC'
// #d50c0c
// #1041db
var color = prompt("Introduzca un color en formato hexadecimal");
var patron = /^#[0-9a-f]{3}(?:[0-9a-f]{3})?$/i.test(color);
if (patron) {
  document.getElementById('fondo').style.background = color;
}
else {

  document.writeln("<h1>El color no está controlado");
  document.writeln("</h1>");
document.style.background = color;
}
}
