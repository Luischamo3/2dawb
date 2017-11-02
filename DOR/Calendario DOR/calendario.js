// Calendario
var celda = document.getElementsByClassName("fila");
var d = new Date();
var currentday = d.getDate();
document.getElementById('fechactual').innerHTML = d.toLocaleString();
var monthview = 0;
var month = parseInt(document.getElementById('m').value) - 1;
var anio = parseInt(document.getElementById("y").value);

var dia = 1;
var i = 0;
var mes = new Array();

//  limpia el calendario
function clean() {
  for (var i = 0; i < celda.length; i++) {
    celda[i].innerHTML = " ";
  }
}

//Buscar un mes
function buscar() {
  clean();
  mes[0] = "Enero";
  mes[1] = "Febrero";
  mes[2] = "Marzo";
  mes[3] = "Abril";
  mes[4] = "Mayo";
  mes[5] = "Junio";
  mes[6] = "Julio";
  mes[7] = "Agosto";
  mes[8] = "Setiembre";
  mes[9] = "Octubre";
  mes[10] = "Noviembre";
  mes[11] = "Diciembre";
  d.setDate(1);
  monthview = document.getElementsByClassName("mesactual");
  month = parseInt(document.getElementById('m').value);
  anio = parseInt(document.getElementById("y").value);
  if (month >= 12) {
    alert("El mes introducido es incorrecto")
    month = 11;
  }

  d.setFullYear(anio, parseInt(month), dia);
  var lastday = new Date(anio, parseInt(month) + 1, 0).getDate();
  var dayweek = d.getDay();

  if (dayweek == 0) {
    i = 6;
  } else {
    i = dayweek - 1;
  }


  for (var j = 1; j < celda.length; i++) {

    monthview[0].innerHTML = mes[month] + "  " + anio;

    celda[i].innerHTML = j;
    j++;

    if (j - 1 == lastday) {
      j = "-";
    }
    if (j == currentday) {

    }

  }

}


// Mes Siguiente
function nextmonth() {
  clean();
  monthview = document.getElementsByClassName("mesactual");
  month = parseInt(document.getElementById('m').value);
  month = month + 1;
  if (month >= 12) {
    month = 11;
    alert("El mes no puede ser mayor a 12 o ser Negativo");
  }

  anio = parseInt(document.getElementById("y").value);

  d.setFullYear(anio, parseInt(month), dia);
  var lastday = new Date(anio, parseInt(month) + 1, 0).getDate();
  var dayweek = d.getDay();
  var i = 0;
  if (dayweek == 0) {
    i = 6;
  } else {
    i = dayweek - 1;
  }
  for (var j = 1; j < celda.length; i++) {

    monthview[0].innerHTML = mes[month] + " " + anio;
    document.getElementById('m').value = month;
    celda[i].innerHTML = j;
    j++;

    if (j - 1 == lastday) {
      j = "-";

    }

  }
  // di actual
}

function previousmonth() {
  clean();
  monthview = document.getElementsByClassName("mesactual");
  month = parseInt(document.getElementById('m').value);
  month = month - 1;
  if (month < 0) {
    month = 0;
    alert("El mes no puede ser menor que 0");
  }
  anio = parseInt(document.getElementById("y").value);

  d.setFullYear(anio, parseInt(month), dia);
  var lastday = new Date(anio, parseInt(month) + 1, 0).getDate();
  var dayweek = d.getDay();
  var i = 0;
  if (dayweek == 0) {
    i = 6;
  } else {
    i = dayweek - 1;
  }
  for (var j = 1; j < celda.length; i++) {

    monthview[0].innerHTML = mes[month] + " " + anio;
    document.getElementById('m').value = month;
    celda[i].innerHTML = j;
    j++;
    if (j - 1 == lastday) {
      j = "-";

    }

  }

}
