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

  //Número aleatorio de preguntas

  var indice_aleatorio = Math.floor(Math.random() * preguntas.length);

  //alert(preguntas[indice_aleatorio]);

  document.getElementById('questions').innerHTML = preguntas[indice_aleatorio];

  // alert(count);

  /*for (var clave in localStorage){
var valor = localStorage[clave];
alert(valor);*/
  var libButton = document.getElementById('lib-button');
  libButton.addEventListener('click', libIt);
}

function GuardarDatos(divstory) {

  var divstory=document.getElementById('resp').value;
  var palabra = "";
  var lista = [divstory];
  // var palabra=;
  for(var i = 0; i < lista.length; i++){
if (typeof lista[i] !== "undefined") {
  palabra = lista[i];

}
  }
  alert(palabra);

  /*  for(var i=1;i<=divstory.length;i++)
   {
         localStorage.setItem("frases", divstory);
   }*/


  // document.getElementById('res').innerHTML= localStorage.getItem("frase",divstory);
  return divstory;
}

function recuperarDatos() {
  var save = GuardarDatos();
  if (localStorage.frases != "") {
    document.getElementById("res").innerHTML = save;

  } else {
    document.getElementById("res").innerHTML = "No existe ningún dato";
  }
  return save;
}


function BorrarDatos() {
  var dato = recuperarDatos();
  localStorage.removeItem("frases", dato);
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
