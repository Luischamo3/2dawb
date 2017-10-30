/*Modifica el javascript para que almacene las frases generadas en localStorage y las muestre en la página.
Probablemente quieras almacenar todas las frases en una clave llamada  (“frases”),
y simplemente añade el valor de esa clave cuando llega una frase nueva.
Modifica el javascript de manera que recuerde cuando un usuario escribe en el formulario,
así si se recarga la página mientras se cumplimenta el formulario,
 los campos que se había cumplimentados se cargarán automáticamente (ver evento keyup).*/

function libIt() {

  var preguntas = ["Quíen descubrió América",
    "Quíen es el mayor superheroe de todos los tiempos",
    "Quíen es el mejor jugador de Fútbol del Mundo",
    "Que guitarra usa Slash",
    "Como se llama el coche más rápido del mundo",
    "Cuántos jugadores hay por alineación de inicio en un partido de Fútbol"
  ];

  var indice_aleatorio = Math.floor(Math.random() * preguntas.length);
  document.getElementById('questions').innerHTML = preguntas[indice_aleatorio];
  var libButton = document.getElementById('lib-button');
  libButton.addEventListener('click', libIt);
}
var respuesta = new Array();

function GuardarDatos() {
  var divstory = document.getElementById('resp').value;
  respuesta.push(divstory);
  for (i = 0; i < respuesta.length; i++) {
    divstory += respuesta[i] + '</br>';
  }
  localStorage.setItem("respuesta", JSON.stringify(respuesta));
}

function recuperarDatos() {
  var save = JSON.parse(localStorage.getItem("respuesta"));
  if (localStorage.respueta != "" && localStorage.respuesta != null) {
    document.getElementById("res").innerHTML = save + "\n";
  } else {
    document.getElementById("res").innerHTML = "No existe ningún dato";
  }
}

function BorrarDatos() {
  var dato = recuperarDatos();
  localStorage.removeItem("respuesta");
}

function contadorClicks() {
  // Si existe contador se incrementa y sino se inicializa
  if (localStorage.contador) {
    // Se convierte el contador a entero porque por defecto es una cadena
    localStorage.contador = parseInt(localStorage.contador) + 1;
  } else {
    localStorage.contador = 1;
  }
  document.getElementById("contador").value = localStorage.contador + " Clicks";
  document.getElementById("contador").innerHTML = localStorage.contador + " Clicks";
}
