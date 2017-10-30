/*Objetos Predefinidos Javascript */

/*Debemos incluir un botón que abra una ventana inicial o padre que genere otra ventana hija.
 En la ventana inicial se ha de escribir la palabra "Original" y en la ventana nueva o hija
 (que se abrirá a partir de la inicial) debemos escribir la palabra "Nueva".
  Esta ventana debe medir 250px de ancho por 150px de alto. El título de la nueva ventana original ha de ser vuestro
nombre y apellidos y debe contener los siguientes elementos HTML:*/


function act2() {
  var a = window.open('views/padre.html', 'Padre', 'titlebar=1,width=600,height=600');
}

/*A continuación se incluirá un nuevo botón que le solicitará
 al usuario un color y se mostrará el texto
 "Este es el color elegido" con el color de fondo seleccionado por el usuario.
  En caso de que el color que ha elegido el usuario no sea correcto o no pueda establecerse,
   mostraremos "El color elegido no está controlado" en formato h1 y estableceremos el fondo de la página a blanco.
Los colores se deben de introducir en formato hexadecimal.*/
function act3() {
  var b = prompt("Introduzca un color en formato hexadecimal");

  var re = new RegExp("^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$");

  ///^#[0-9a-f]{3,6}$/i
  if (re.test(b)) {
    document.getElementsByTagName("body")[0].style = "background-color:" + b;
    document.getElementById("h1act3").innerHTML = "Este es el color elegido";
  } else {
    document.getElementsByTagName("body")[0].style = "background-color: white";
    document.getElementById("h1act3").innerHTML = "El color elegido no está controlado";
  }
}

/*Se ha de añadir una nueva opción (botón) que abra una ventana nueva en la que cada 5
segundos se escribe tu nombre con un color diferente (se deben definir 10 colores diferentes).*/
function act4() {
  var a = window.open('views/act4.html');
}
// Cambiar de color un texto cada 5 segundos;
var colors = ['red', 'green', 'blue', 'orange', 'yellow', 'lightblue', 'black', 'pink', 'brown'];

var timer = setInterval(() => document.getElementById('name').style.color = colors[Math.floor(Math.random() * colors.length)], 5000);

/*Se incluirá una nueva opción con el texto: Abrir página que se autodestruirá a los 2 segundos.
 Al pulsar sobre esta opción, se abrirá una ventana que tenga el mismo texto que el enlace y
  transcurridos los 2 segundos, se abrirá una nueva ventana con el texto "Realmente se
destruirá en 5 segundos" y al transcurrir los 5 segundos se cerrará la primera ventana.*/


function act5() {
  var view1 = window.open('views/act5_1.html', "", "width=600, height=600");

  setTimeout(function abrirSegunda() {
    var view2 = window.open('views/act5_2.html', "", "width=600, height=600");

    setTimeout(() => view1.close(), 5000)
  }, 2000);
}
