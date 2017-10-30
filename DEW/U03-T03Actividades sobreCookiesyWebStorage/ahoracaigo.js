var aciertos = 0; var fallos = 0;
var respuesta = new Array();

function GuardarDatos() {
  var divstory = compr();
  respuesta.push(divstory);
  for (i = 0; i < respuesta.length; i++) {
    divstory += respuesta[i] + '</br>';
  }
  localStorage.setItem("respuesta", JSON.stringify(respuesta));
}

function recuperarDatos() {
  var save = JSON.parse(localStorage.getItem("respuesta"));
  if (localStorage.respueta != "" && localStorage.respuesta != null) {
    document.getElementById("history").innerHTML = save + "\n";
  } else {
    document.getElementById("history").innerHTML = "No existe ningún dato";
  }
}

function BorrarDatos() {
  var dato = recuperarDatos();
  localStorage.removeItem("respuesta");
}

function question(){
  var preguntas = ["Quíen descubrió América",
    "Quíen es el mayor superheroe de todos los tiempos",
    "Quíen es el mejor jugador de Fútbol del Mundo",
    "Que guitarra usa Slash",
    "Como se llama el coche más rápido del mundo",
    "Cuántos jugadores hay por alineación de inicio en un partido de Fútbol"
  ];
var resp = ["ch**o", "ch*n* e* p*l*gr**o", "cr****no", "g*bs*n", "b*g**ti", "**"];
var respc = ["chamo", "chano el peligroso", "cristiano", "gibson", "bugatti", "**"];
  var r = Math.floor((Math.random() * preguntas.length));

	document.getElementById("qst").innerHTML = preguntas[r];
	var p = document.getElementById("word").value = resp[r];
	//return r;

}


function comprobar(){
  if(p == respc[r]){
    alert("Enhorabuena! Es correcto");
    aciertos++;
    document.getElementById('aciertos').innerHTML =" Tus Aciertos: " + aciertos;
  }
  else{
    var fail = [];
    alert("Lo sentimos caerás por la trampilla ");
    fallos++;
    document.getElementById('fallos').innerHTML ="fallos: " + fallos;
  }
}
